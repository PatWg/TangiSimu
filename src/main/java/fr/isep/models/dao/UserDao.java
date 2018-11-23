package fr.isep.models.dao;

import fr.isep.models.User;

import java.sql.SQLException;

public interface UserDao {
    User createUser(String firstName, String lastName, boolean simOrObject) throws SQLException;
}
