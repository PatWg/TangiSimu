package fr.isep.models.dao;

import fr.isep.models.EventLog;

import java.sql.SQLException;

public interface LogDao {
    void insertCreateBlockLog(EventLog eventLog) throws SQLException;
}
