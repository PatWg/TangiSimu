package fr.isep.controllers;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import fr.isep.helpers.FormHelper;
import fr.isep.helpers.URIHelper;
import fr.isep.models.Exercise;
import fr.isep.models.User;
import fr.isep.models.dao.ExerciseDataSource;
import fr.isep.models.dao.LogDataSource;
import fr.isep.models.dao.UserDataSource;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

@WebServlet(name = "HomeServlet", urlPatterns = {"", URIHelper.SIMULATION_URI, URIHelper.TANGIBLE_URI})
public class HomeServlet extends HttpServlet {
    private static final String USER_ATTRIBUTE = "user";
    private static final String EXERCISES_ATTRIBUTE = "exercises";
    private static final String EXERCISE_STATEMENT = "exerciseStatement";
    private static final String WORKSPACE_STATE = "workspace";
    private static final String RUNTIME = "runtime";

    private UserDataSource userDataSource = new UserDataSource();
    private ExerciseDataSource exerciseDataSource = new ExerciseDataSource();
    private LogDataSource logDataSource = new LogDataSource();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String firstName = request.getParameter(FormHelper.LoginFormHelper.FIRST_NAME);
        String lastName = request.getParameter(FormHelper.LoginFormHelper.LAST_NAME);
        boolean isSimulation = isSimulation(request);
        if (isValid(firstName, lastName)) {
            try {
                User user = userDataSource.createUser(firstName, lastName, isSimulation);
                List<Exercise> exercises = retrieveExercises();
                Gson gson = new Gson();
                Type listType = new TypeToken<List<Exercise>>() {}.getType();
                String json = gson.toJson(exercises, listType);
                String workspaceState = logDataSource.getInitialWorkspaceState(user);
                String runtimeFile = retrieveRuntimeFile();

                request.setAttribute(USER_ATTRIBUTE, user);
                request.setAttribute(EXERCISES_ATTRIBUTE, json);
                request.setAttribute(EXERCISE_STATEMENT, exercises.get(0).getContent());
                request.setAttribute(WORKSPACE_STATE, workspaceState);
                request.setAttribute(RUNTIME, runtimeFile);
                redirectUser(request, response, user);
            } catch (NullPointerException | SQLException e) {
                e.printStackTrace();
            }
        } else {
            displayError(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String uri = request.getRequestURI();
        RequestDispatcher dispatcher;
        switch (uri) {
            case URIHelper.BASE_URI + URIHelper.TANGIBLE_URI:
                request.setAttribute(FormHelper.LoginFormHelper.ACTION_ATTRIBUTE, FormHelper.LoginFormHelper.ACTION_TANGIBLE);
                request.setAttribute(FormHelper.LoginFormHelper.TYPE_ATTRIBUTE, URIHelper.TANGIBLE_URI);
                dispatcher = request.getRequestDispatcher("login.jsp");
                break;
            case URIHelper.BASE_URI + URIHelper.SIMULATION_URI:
                request.setAttribute(FormHelper.LoginFormHelper.ACTION_ATTRIBUTE, FormHelper.LoginFormHelper.ACTION_SIMULATION);
                request.setAttribute(FormHelper.LoginFormHelper.TYPE_ATTRIBUTE, URIHelper.SIMULATION_URI);
                dispatcher = request.getRequestDispatcher("login.jsp");
                break;
            default:
                dispatcher = request.getRequestDispatcher("404.html");
                break;
        }
        dispatcher.forward(request, response);
    }

    private boolean isValid(String firstName, String lastName) {
        return !firstName.isEmpty() && !lastName.isEmpty();
    }

    private boolean isSimulation(HttpServletRequest request) {
        return request.getParameter(FormHelper.LoginFormHelper.TYPE_ATTRIBUTE).equals(URIHelper.SIMULATION_URI);
    }

    private void redirectUser(HttpServletRequest request, HttpServletResponse response, User user) throws ServletException, IOException {
        RequestDispatcher dispatcher;
        if (user.isSimorobj()) {
            dispatcher = request.getRequestDispatcher("/WEB-INF/index-sim.jsp");
        } else {
            dispatcher = request.getRequestDispatcher("/WEB-INF/index-tan.jsp");
        }
        dispatcher.forward(request, response);
    }

    private void displayError(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute(FormHelper.LoginFormHelper.ERROR_ATTRIBUTE, "Formulaire incomplet. Merci de réessayer.");
        request.setAttribute(FormHelper.LoginFormHelper.ACTION_ATTRIBUTE, request.getParameter(FormHelper.LoginFormHelper.ACTION_ATTRIBUTE));
        request.setAttribute(FormHelper.LoginFormHelper.TYPE_ATTRIBUTE, request.getParameter(FormHelper.LoginFormHelper.TYPE_ATTRIBUTE));
        RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
        dispatcher.forward(request, response);
    }

    private List<Exercise> retrieveExercises() throws SQLException {
        return exerciseDataSource.getExercises();
    }

    private String retrieveRuntimeFile() {
        Scanner scanner = new Scanner(getServletContext().getResourceAsStream("/WEB-INF/runtime.txt"));
        StringBuilder stringBuilder = new StringBuilder();
        while (scanner.hasNextLine()) {
            stringBuilder.append(scanner.nextLine());
        }
        return stringBuilder.toString();
    }
}
