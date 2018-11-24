package fr.isep.models.dao;

import fr.isep.models.EventLog;
import fr.isep.models.MousePositionLog;

import java.sql.SQLException;

public interface LogDao {
    void insertCreateBlockLog(EventLog eventLog) throws SQLException;
    void insertMoveBlockLog(EventLog eventLog) throws SQLException;
    void insertCombineBlockLog(EventLog eventLog) throws SQLException;
    void insertChangeBlockLog(EventLog eventLog) throws SQLException;
    void insertDeleteBlockLog(EventLog eventLog) throws SQLException;
    void insertMousePositionLog(MousePositionLog log) throws SQLException;
    void insertVariableLog(EventLog eventLog) throws SQLException;
}
