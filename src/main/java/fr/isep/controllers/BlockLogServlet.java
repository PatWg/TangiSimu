package fr.isep.controllers;

import com.google.gson.Gson;
import com.sun.deploy.net.HttpResponse;
import fr.isep.helpers.URIHelper;
import fr.isep.models.*;
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

@WebServlet(name = "BlockLogServlet", urlPatterns = {URIHelper.CREATE_BLOCK, URIHelper.MOVE_BLOCK,
                                                    URIHelper.COMBINE_BLOCK, URIHelper.CHANGE_BLOCK,
                                                    URIHelper.DELETE_BLOCK, URIHelper.CATEGORY_EVENT})
public class BlockLogServlet extends HttpServlet {
    private LogDataSource logDataSource = new LogDataSource();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        switch (request.getRequestURI()) {
            case URIHelper.BASE_URI + URIHelper.CREATE_BLOCK:
            createBlock(request);
            break;
            case URIHelper.BASE_URI + URIHelper.MOVE_BLOCK:
                moveBlock(request);
                break;
            case URIHelper.BASE_URI + URIHelper.COMBINE_BLOCK:
                combineBlock(request);
                break;
            case URIHelper.BASE_URI + URIHelper.CHANGE_BLOCK:
                changeBlock(request);
                break;
            case URIHelper.BASE_URI + URIHelper.DELETE_BLOCK:
                deleteBlock(request);
                break;
            case URIHelper.BASE_URI + URIHelper.CATEGORY_EVENT:
                categoryEventLog(request);
                break;
            default:
                throw new ServletException("An error occurred while processing your request.");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // This URL should not be accessible via a GET method
        RequestDispatcher dispatcher = request.getRequestDispatcher("404.html");
        dispatcher.forward(request, response);
    }

    private void createBlock(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), CreateBlockLog.class);
        try {
            logDataSource.insertCreateBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a createBlock log.");
            System.out.println(e.getMessage());
        }
    }

    private void moveBlock(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), MoveBlockLog.class);
        try {
            logDataSource.insertMoveBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a moveBlock log.");
            System.out.println(e.getMessage());
        }
    }

    private void combineBlock(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), CombineBlockLog.class);
        try {
            logDataSource.insertCombineBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a combineBlock log.");
            System.out.println(e.getMessage());
        }
    }

    private void changeBlock(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), ChangeBlockLog.class);
        try {
            logDataSource.insertChangeBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a changeBlock log.");
            System.out.println(e.getMessage());
        }
    }

    private void deleteBlock(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog log = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), DeleteBlockLog.class);
        try {
            logDataSource.insertDeleteBlockLog(log);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a deleteBlock log.");
            System.out.println(e.getMessage());
        }
    }

    private void categoryEventLog(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        EventLog eventLog = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), CategoryEventLog.class);
        try {
            logDataSource.insertCategoryEventLog(eventLog);
        } catch (SQLException e) {
            System.out.println("An error occurred while inserting a categoryEvent log.");
            System.out.println(e.getMessage());
        }
    }
}
