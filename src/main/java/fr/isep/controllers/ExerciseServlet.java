package fr.isep.controllers;

import com.google.gson.Gson;
import fr.isep.helpers.URIHelper;
import fr.isep.models.ExerciseLog;
import fr.isep.models.Script;
import fr.isep.models.dao.LogDataSource;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;
import java.util.stream.Collectors;

@WebServlet(name = "ExerciseServlet", urlPatterns = {URIHelper.CHANGE_EXERCISE, URIHelper.RUN_EXERCISE, URIHelper.HEXLIFY})
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
            case URIHelper.BASE_URI + URIHelper.HEXLIFY:
                System.out.println("Received request on Hexlify");
                try {
                    String script = hexlify(req);
                    resp.getWriter().write(script);
                } catch (Exception e) {
                    System.out.println("An error occurred while hexlifying the script.");
                    System.out.println(e.getMessage());
                }
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

    private String hexlify(HttpServletRequest request) throws Exception {
        Gson gson = new Gson();
        Script script = gson.fromJson(request.getReader().lines().collect(Collectors.joining(System.lineSeparator())), Script.class);
        String hexScript = hexlifyScript(script.getScript());
        Scanner scanner = new Scanner(getServletContext().getResourceAsStream("/WEB-INF/runtime.txt"));
        StringBuilder runtime = new StringBuilder();
        while (scanner.hasNext()) {
            runtime.append(scanner.nextLine())
                    .append("\n");
        }

        String[] run = runtime.toString().split("\n");
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < run.length - 5; i++) {
            result.append(run[i])
                    .append("\n");
        }
        result.append(hexScript);
        result.append(run[run.length - 5])
                .append("\n")
                .append(run[run.length - 4])
                .append("\n")
                .append(run[run.length - 3])
                .append("\n")
                .append(run[run.length - 2])
                .append("\n")
                .append(run[run.length - 1]);
        return result.toString();
    }

    private String hexlifyScript(String script) throws Exception {
        byte[] data = new byte[4 + script.length() + (16 - (4 + script.length()) % 16)];
        data[0] = 77;
        data[1] = 80;
        data[2] = (byte) (script.length() & 0xff);
        data[3] = (byte) ((script.length() >> 8) & 0xff);
        for (int i = 0; i < script.length(); ++i) {
            data[4 + i] = (byte) script.charAt(i);
        }

        if (data.length > 8192) {
            throw new Exception("Script is too long");
        }
        int addr = 0x3e000;
        byte[] chunk = new byte[5 + 16];

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(":020000040003F7")
                .append("\n");
        for (int i = 0; i < data.length; i += 16) {
            chunk[0] = 16;
            chunk[1] = (byte) ((addr >> 8) & 0xff);
            chunk[2] = (byte) (addr & 0xff);
            chunk[3] = 0;
            for (int j = 0; j < 16; j++) {
                chunk[4 + j] = data[i + j];
            }
            byte checksum = 0;
            for (int j = 0; j < 4 + 16; j++) {
                checksum += chunk[j];
            }
            chunk[4 + 16] = (byte) ((-checksum) & 0xff);
            stringBuilder.append(':')
                    .append(hexlify(chunk).toUpperCase())
                    .append("\n");
            addr += 16;
        }
        return stringBuilder.toString();
    }

    private String hexlify(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte aByte : bytes) {
            result.append(String.format("%02X", aByte));
        }
        return result.toString();
    }
}
