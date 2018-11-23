package fr.isep.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DatabaseConnection {
    private static DatabaseConnection databaseConnection;
    private static Connection connection;
    private DatabaseConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Properties connectionProps = new Properties();
            connectionProps.put("user", DatabaseHelper.USERNAME);
            connectionProps.put("password", DatabaseHelper.PASSWORD);
            connection = DriverManager.getConnection(DatabaseHelper.URL, connectionProps);
            connection.setCatalog(DatabaseHelper.CATALOG);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("An unexpected error occurred while connecting to the database.");
            System.out.println(e.getMessage());
        }
    }

    public static DatabaseConnection getInstance() {
        if (databaseConnection == null) databaseConnection = new DatabaseConnection();
        return databaseConnection;
    }

    public Connection getConnection() {
        return connection;
    }
}
