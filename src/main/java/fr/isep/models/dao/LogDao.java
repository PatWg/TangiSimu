package fr.isep.models.dao;

import fr.isep.models.EventLog;

import java.sql.SQLException;

public interface LogDao {
    void insertCreateBlockLog(EventLog eventLog) throws SQLException;
    void insertMoveBlockLog(EventLog eventLog) throws SQLException;
    void insertCombineBlockLog(EventLog eventLog) throws SQLException;
}
