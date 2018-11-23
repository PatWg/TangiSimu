package fr.isep.models;

public class MoveBlockLog extends EventLog {
    private String newCoordinate;

    public String getNewCoordinate() {
        return newCoordinate;
    }

    public void setNewCoordinate(String newCoordinate) {
        this.newCoordinate = newCoordinate;
    }
}
