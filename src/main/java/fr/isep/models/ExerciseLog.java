package fr.isep.models;

public class ExerciseLog {
    public static final String WORKSPACE_XML = "xml";

    private String userID;
    private int currentExerciseID;
    private String newExerciseID;
    private String action;
    private String workspacexml;
    private String time;

    public String getNewExerciseID() {
        return newExerciseID;
    }

    public void setNewExerciseID(String newExerciseID) {
        this.newExerciseID = newExerciseID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public int getCurrentExerciseID() {
        return currentExerciseID;
    }

    public void setCurrentExerciseID(int currentExerciseID) {
        this.currentExerciseID = currentExerciseID;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getWorkspacexml() {
        return workspacexml;
    }

    public void setWorkspacexml(String workspacexml) {
        this.workspacexml = workspacexml;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
