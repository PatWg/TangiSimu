package fr.isep.models.dao;

import fr.isep.database.DatabaseConnection;
import fr.isep.models.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LogDataSource implements LogDao {
    private static final int INSERT_SUCCESS = 1;
    private static final int SELECT_ERROR = 0;
    private Connection connection;

    private static final String INSERT_MOUSE_LOG = "INSERT INTO mousepos (userid, exerciseid, xposition, yposition, mptime) VALUES (?, ?, ?, ?, ?)";
    private PreparedStatement mouseLogStatement = null;
    private static final int MAX_BATCH_SIZE = 1000;
    private int batchSize = 0;

    public LogDataSource() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    @Override
    public void insertCreateBlockLog(EventLog eventLog) throws SQLException {
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addCreateBlockLog(eventId, eventLog);
        }
    }

    @Override
    public void insertMoveBlockLog(EventLog eventLog) throws SQLException {
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addMoveBlockLog(eventId, eventLog);
        }
    }

    @Override
    public void insertCombineBlockLog(EventLog eventLog) throws SQLException {
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addCombineBlockLog(eventId, eventLog);
        }
    }

    @Override
    public void insertChangeBlockLog(EventLog eventLog) throws SQLException {
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addChangeBlockLog(eventId, eventLog);
        }
    }

    @Override
    public void insertDeleteBlockLog(EventLog eventLog) throws SQLException {
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addDeleteBlockLog(eventId, eventLog);
        }
    }

    @Override
    public void insertCategoryEventLog(EventLog eventLog) throws SQLException {
        insertCategoryEventWorkspaceLog(eventLog);
    }

    @Override
    public void insertMousePositionLog(MousePositionLog log) throws SQLException {
        addMousePositionLog(log);
    }

    @Override
    public void insertVariableLog(EventLog eventLog) throws SQLException {
        // Issue with inconsistent naming conventions led to this line here
        // Gson was not able to parse it appropriately
        eventLog.setBlockId(((VariableLog) eventLog).getVarId());
        int status = insertEventWorkspaceLog(eventLog);
        if (status == INSERT_SUCCESS) {
            int eventId = getEventId(eventLog);
            addVariableLog(eventId, eventLog);
        }
    }

    @Override
    public String getInitialWorkspaceState(User user) throws SQLException {
        return selectInitialWorkspaceState(user);
    }

    @Override
    public String changeExercise(ExerciseLog exerciseLog) throws SQLException {
        saveCurrentExercise(exerciseLog);
        int saveWorkspace = saveWorkspaceState(exerciseLog);
        if (saveWorkspace == INSERT_SUCCESS) {
            return getWorkspaceState(exerciseLog);
        }
        return "";
    }

    @Override
    public void runExercise(ExerciseLog exerciseLog) throws SQLException {
        insertRunExerciseLog(exerciseLog);
    }

    private int insertEventWorkspaceLog(EventLog eventLog) throws SQLException {
        // Database and JSON types are different for userid and exerciseid
        // So need to perform a few processes before executing the query
        String insertStatement = "INSERT INTO eventworkspace (userid, exerciseid, groupid, blocklyid, logtype, logtime) " +
                "VALUES (?, ?, ?, ?, ?, ?)";
        int userid = Integer.parseInt(eventLog.getUserID());
        int exerciseid = getExerciseId(eventLog);

        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, userid);
        statement.setInt(2, exerciseid);
        statement.setString(3, eventLog.getGroup());
        statement.setString(4, eventLog.getBlockId());
        statement.setString(5, eventLog.getType());
        statement.setString(6, eventLog.getTime());
        return statement.executeUpdate();
    }

    private int insertCategoryEventWorkspaceLog(EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO eventworkspace (userid, exerciseid, groupid, blocklyid, logtype, logtime) " +
                "VALUES (?, ?, ?, ?, ?, ?)";
        int userid = Integer.parseInt(eventLog.getUserID());
        int exerciseid = getExerciseId(eventLog);

        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, userid);
        statement.setInt(2, exerciseid);
        statement.setString(3, eventLog.getGroup());
        statement.setString(4, ((CategoryEventLog) eventLog).getNewValue());
        statement.setString(5, eventLog.getType());
        statement.setString(6, eventLog.getTime());
        return statement.executeUpdate();
    }

    private int getEventId(EventLog eventLog) throws SQLException {
        String selectStatement = "SELECT blocklogid FROM eventworkspace WHERE userid = ? AND exerciseid = ? and blocklyid = ? and logtype = ? " +
                "ORDER BY blocklogid DESC LIMIT 1";
        int userid = Integer.parseInt(eventLog.getUserID());
        int exerciseid = getExerciseId(eventLog);
        PreparedStatement statement = connection.prepareStatement(selectStatement);
        statement.setInt(1, userid);
        statement.setInt(2, exerciseid);
        statement.setString(3, eventLog.getBlockId());
        statement.setString(4, eventLog.getType());
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            return rs.getInt(EventLog.BLOCKLOG_ID);
        }
        return SELECT_ERROR;
    }

    private void addCreateBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockcreate (createid, xml) VALUES (?, ?)";
        String xml = ((CreateBlockLog) eventLog).getXml();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, xml);
        statement.executeUpdate();
    }

    private void addMoveBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockmove VALUES (?, ?)";
        String newCoordinate = ((MoveBlockLog) eventLog).getNewCoordinate();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, newCoordinate);
        statement.executeUpdate();
    }

    private void addCombineBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockcombine VALUES (?, ?, ?)";
        String parentId = ((CombineBlockLog) eventLog).getNewParentId();
        String inputName = ((CombineBlockLog) eventLog).getNewInputName();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, parentId);
        statement.setString(3, inputName);
        statement.executeUpdate();
    }

    private void addChangeBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockchange VALUES (?, ?, ?)";
        String varType = ((ChangeBlockLog) eventLog).getName();
        String var = ((ChangeBlockLog) eventLog).getNewValue();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, varType);
        statement.setString(3, var);
        statement.executeUpdate();
    }

    private void addDeleteBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockdelete VALUES (?, ?)";
        String blockIds = ((DeleteBlockLog) eventLog).getIdsAsString();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, blockIds);
        statement.executeUpdate();
    }

    private void addMousePositionLog(MousePositionLog log) throws SQLException {
//        String insertStatement = "INSERT INTO mousepos (userid, exerciseid, xposition, yposition, mptime) VALUES (?, ?, ?, ?, ?)";
        if (mouseLogStatement == null) mouseLogStatement = connection.prepareStatement(INSERT_MOUSE_LOG);
//        PreparedStatement statement = connection.prepareStatement(insertStatement);
        int userId = Integer.parseInt(log.getUserID());
        int exerciseId = getExerciseId(log);
        mouseLogStatement.setInt(1, userId);
        mouseLogStatement.setInt(2, exerciseId);
        mouseLogStatement.setString(3, log.getX());
        mouseLogStatement.setString(4, log.getY());
        mouseLogStatement.setString(5, log.getTime());
        mouseLogStatement.addBatch();
        batchSize++;
        if (batchSize == MAX_BATCH_SIZE) {
            mouseLogStatement.executeBatch();
            batchSize = 0;
        }
//        statement.executeUpdate();
    }

    private void addVariableLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO varlog VALUES (?, ?)";
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, ((VariableLog) eventLog).getVarName());
        statement.executeUpdate();
    }

    private String selectInitialWorkspaceState(User user) throws SQLException {
        String selectStatement = "SELECT blockid, xml FROM workspacexml WHERE userid = ? AND exerciseid = 1 " +
                "ORDER BY blockid DESC LIMIT 1";
        PreparedStatement statement = connection.prepareStatement(selectStatement);
        statement.setInt(1, user.getUserid());
        ResultSet rs = statement.executeQuery();
        return rs.next() ? rs.getString(ExerciseLog.WORKSPACE_XML) : "";
    }

    private void saveCurrentExercise(ExerciseLog exerciseLog) throws SQLException {
        String insertStatement = "INSERT INTO currentex (userid, exerciseid, cptime) VALUES (?, ?, ?)";
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, Integer.parseInt(exerciseLog.getUserID()));
        statement.setInt(2, exerciseLog.getCurrentExerciseID());
        statement.setString(3, exerciseLog.getTime());
        statement.executeUpdate();
    }

    private int saveWorkspaceState(ExerciseLog exerciseLog) throws SQLException {
        return insertIntoWorkspaceXml(exerciseLog);
    }

    private String getWorkspaceState(ExerciseLog exerciseLog) throws SQLException {
        String selectStatement = "SELECT blockid, xml FROM workspacexml WHERE userid = ? AND exerciseid = ? " +
                "ORDER BY blockid DESC LIMIT 1";
        PreparedStatement statement = connection.prepareStatement(selectStatement);
        statement.setInt(1, Integer.parseInt(exerciseLog.getUserID()));
        statement.setInt(2, Integer.parseInt(exerciseLog.getNewExerciseID()));
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            return rs.getString(ExerciseLog.WORKSPACE_XML);
        }
        return "";
    }

    private void insertRunExerciseLog(ExerciseLog exerciseLog)  throws SQLException {
        insertIntoWorkspaceXml(exerciseLog);
    }

    private int insertIntoWorkspaceXml(ExerciseLog exerciseLog) throws SQLException {
        String insertStatement = "INSERT INTO workspacexml (userid, exerciseid, action, xml, blocktime) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, Integer.parseInt(exerciseLog.getUserID()));
        statement.setInt(2, exerciseLog.getCurrentExerciseID());
        statement.setString(3, exerciseLog.getAction());
        statement.setString(4, exerciseLog.getWorkspacexml());
        statement.setString(5, exerciseLog.getTime());
        return statement.executeUpdate();
    }

    private int getExerciseId(EventLog eventLog) {
        String exerciseId = eventLog.getCurrentExerciseID().trim();
        return Integer.parseInt(exerciseId);
    }
}
