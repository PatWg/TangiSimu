package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.helpers.FormHelper;
import fr.isep.helpers.URIHelper;
import fr.isep.models.Exercise;
import fr.isep.models.User;
import fr.isep.models.dao.ExerciseDataSource;
import fr.isep.models.dao.UserDataSource;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet(name = "HomeServlet", urlPatterns = {"", URIHelper.SIMULATION_URI, URIHelper.TANGIBLE_URI})
public class HomeServlet extends HttpServlet {
    private static final String USER_ATTRIBUTE = "user";
    private static final String EXERCISES_ATTRIBUTE = "exercises";

    private UserDataSource userDataSource = new UserDataSource();
    private ExerciseDataSource exerciseDataSource = new ExerciseDataSource();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String firstName = request.getParameter(FormHelper.LoginFormHelper.FIRST_NAME);
        String lastName = request.getParameter(FormHelper.LoginFormHelper.LAST_NAME);
        boolean isSimulation = isSimulation(request);
        if (isValid(firstName, lastName)) {
            try {
                User user = userDataSource.createUser(firstName, lastName, isSimulation);
                request.setAttribute(USER_ATTRIBUTE, user);
                List<Exercise> exercises = retrieveExercises();
                request.setAttribute(EXERCISES_ATTRIBUTE, exercises);
                redirectUser(request, response, user);
            } catch (NullPointerException | SQLException e) {
                e.printStackTrace();
            }
        } else {
            displayError(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO: Ask about how reconnection works
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
            dispatcher = request.getRequestDispatcher("/WEB-INF/index.jsp");
        } else {
            dispatcher = request.getRequestDispatcher("/WEB-INF/index.jsp");
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
}