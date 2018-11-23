package fr.isep.models.dao;

import fr.isep.models.Exercise;

import java.sql.SQLException;
import java.util.List;

public interface ExerciseDao {
    List<Exercise> getExercises() throws SQLException;
}
