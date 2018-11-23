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


    private int getExerciseId(EventLog eventLog) {
        String exerciseId = eventLog.getCurrentExerciseID().trim();
        exerciseId = exerciseId.split(" ")[1];
        return Integer.parseInt(exerciseId);
    }
}
