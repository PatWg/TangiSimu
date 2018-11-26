package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.helpers.URIHelper;
import fr.isep.models.EventLog;
import fr.isep.models.VariableLog;
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

@WebServlet(name = "VariableLogServlet", urlPatterns = URIHelper.VARIABLE_LOG)
public class VariableLogServlet extends HttpServlet {
    private LogDataSource dataSource = new LogDataSource();

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Gson gson = new Gson();
        EventLog eventLog = gson.fromJson(req.getReader().lines().collect(Collectors.joining(System.lineSeparator())), VariableLog.class);
        try {
            dataSource.insertVariableLog(eventLog);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a variable log.");
            System.out.println(e.getMessage());
        }
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = req.getRequestDispatcher("404.html");
        dispatcher.forward(req, resp);
    }
}
