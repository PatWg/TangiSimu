package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.models.CreateBlockLog;
import fr.isep.models.EventLog;
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

@WebServlet(name = "CreateBlockServlet", urlPatterns = {"/createBlock"})
public class CreateBlockServlet extends HttpServlet {
    private LogDataSource logDataSource = new LogDataSource();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), CreateBlockLog.class);
        try {
            logDataSource.insertCreateBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a createBlock log.");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // This URL should not be accessible via a GET method
        RequestDispatcher dispatcher = request.getRequestDispatcher("404.html");
        dispatcher.forward(request, response);
    }
}
