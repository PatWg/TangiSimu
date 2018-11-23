package fr.isep.models.dao;

import fr.isep.database.DatabaseConnection;
import fr.isep.models.CreateBlockLog;
import fr.isep.models.EventLog;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LogDataSource implements LogDao {
    private static final int INSERT_SUCCESS = 1;
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
        String selectStatement = "SELECT blocklogid FROM eventworkspace WHERE userid = ? AND exerciseid = ? and blocklyid = ? and logtype = ?";
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
        throw new SQLException("Could not find the latest eventworkspace item inserted");
    }

    private void addCreateBlockLog(int eventId, EventLog eventLog) throws SQLException {
        String insertStatement = "INSERT INTO blockcreate (createid, xml) VALUES (?, ?)";
        String xml = eventLog.getXml();
        PreparedStatement statement = connection.prepareStatement(insertStatement);
        statement.setInt(1, eventId);
        statement.setString(2, eventLog.getXml());
        statement.executeUpdate();
    }


    private int getExerciseId(EventLog eventLog) {
        String exerciseId = eventLog.getCurrentExerciseID().trim();
        exerciseId = exerciseId.split(" ")[1];
        return Integer.parseInt(exerciseId);
    }
}
