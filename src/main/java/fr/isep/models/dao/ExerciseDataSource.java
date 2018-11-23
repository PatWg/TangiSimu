package fr.isep.models.dao;

import fr.isep.database.DatabaseConnection;
import fr.isep.models.Exercise;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ExerciseDataSource implements ExerciseDao {
    private Connection connection;

    public ExerciseDataSource() {
        connection = DatabaseConnection.getInstance().getConnection();
    }

    @Override
    public List<Exercise> getExercises() throws SQLException {
        List<Exercise> exercises = new ArrayList<>();
        String selectExercisesSql = "SELECT * FROM exerciselist";
        PreparedStatement preparedStatement = connection.prepareStatement(selectExercisesSql);
        ResultSet rs = preparedStatement.executeQuery();
        while (rs.next()) {
            Exercise exercise = new Exercise();
            exercise.setExerciseid(rs.getInt(Exercise.EXERCISE_ID));
            exercise.setTitle(rs.getString(Exercise.TITLE));
            exercise.setContent(rs.getString(Exercise.CONTENT));
            exercise.setBlockxml(rs.getString(Exercise.BLOCK_XML));
            exercises.add(exercise);
        }
        return exercises;
    }
}
