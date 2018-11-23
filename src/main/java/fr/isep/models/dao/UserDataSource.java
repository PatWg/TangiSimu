package fr.isep.models.dao;

import fr.isep.database.DatabaseConnection;
import fr.isep.models.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDataSource implements UserDao {
    private Connection connection;

    public UserDataSource() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    @Override
    public User createUser(String firstName, String lastName, boolean simOrObject) throws SQLException {
        if (getUser(firstName, lastName) == null) {
            String insertUserSql = "INSERT INTO userlist " + "(" + User.FNAME + ", " + User.LNAME + ", " + User.SIM_OR_OBJ + ") " + "VALUES (?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(insertUserSql);
            statement.setString(1, firstName);
            statement.setString(2, lastName);
            statement.setBoolean(3, simOrObject);
            statement.executeUpdate();
        }
        return getUser(firstName, lastName);
    }

    private User getUser(String firstName, String lastName) throws SQLException {
        String selectUserSql = "SELECT * FROM userlist WHERE " + User.FNAME + "=? AND " + User.LNAME + "=?";
        PreparedStatement statement = connection.prepareStatement(selectUserSql);
        statement.setString(1, firstName);
        statement.setString(2, lastName);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            User user = new User();
            user.setUserid(rs.getInt(User.USER_ID));
            user.setFname(rs.getString(User.FNAME));
            user.setLname(rs.getString(User.LNAME));
            user.setSimorobj(rs.getBoolean(User.SIM_OR_OBJ));
            return user;
        }
        return null;
    }
}
