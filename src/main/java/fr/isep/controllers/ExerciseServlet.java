package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.helpers.URIHelper;
import fr.isep.models.ExerciseLog;
import fr.isep.models.dao.LogDataSource;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.stream.Collectors;

@WebServlet(name = "ExerciseServlet", urlPatterns = {URIHelper.CHANGE_EXERCISE, URIHelper.RUN_EXERCISE})
public class ExerciseServlet extends HttpServlet {
    private LogDataSource dataSource = new LogDataSource();

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        switch (req.getRequestURI()) {
            case URIHelper.BASE_URI + URIHelper.CHANGE_EXERCISE:
                changeExercise(req, resp);
                break;
            case URIHelper.BASE_URI + URIHelper.RUN_EXERCISE:
                runExercise(req);
                break;
            default:
                throw new ServletException("An error occurred while processing your request.");
        }
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = req.getRequestDispatcher("404.html");
        dispatcher.forward(req, resp);
    }

    private void changeExercise(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Gson gson = new Gson();
        ExerciseLog exerciseLog = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), ExerciseLog.class);
        try {
            String workspaceState = dataSource.changeExercise(exerciseLog);
            response.getWriter().write(workspaceState);
        } catch (SQLException e) {
            System.out.println("An error occurred while trying to change exercise");
            System.out.println(e.getMessage());
        }
    }

    private void runExercise(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        ExerciseLog exerciseLog = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), ExerciseLog.class);
        try {
            dataSource.runExercise(exerciseLog);
        } catch (SQLException e) {
            System.out.println("An error occurred while saving a 'run' event to the database.");
            System.out.println(e.getMessage());
        }
    }
}
