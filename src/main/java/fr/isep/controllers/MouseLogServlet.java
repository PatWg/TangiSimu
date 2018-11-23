package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.helpers.URIHelper;
import fr.isep.models.MousePositionLog;
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

@WebServlet(name = "MouseLogServlet", urlPatterns = URIHelper.MOUSE_LOG)
public class MouseLogServlet extends HttpServlet {
    LogDataSource dataSource = new LogDataSource();

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Gson gson = new Gson();
        MousePositionLog mouseLog = gson.fromJson(req.getReader().lines().collect(Collectors.joining(System.lineSeparator())), MousePositionLog.class);
        try {
            dataSource.insertMousePositionLog(mouseLog);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a MousePositionLog.");
            System.out.println(e.getMessage());
        }

    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = req.getRequestDispatcher("404.html");
        dispatcher.forward(req, resp);
    }
}
