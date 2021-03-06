package fr.isep.models;


public abstract class EventLog {
    public static final String BLOCKLOG_ID = "blocklogid";

    protected String type;
    protected String blockId;
    protected String group;
    protected String userID;
    protected String currentExerciseID;
    protected String time;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBlockId() {
        return blockId;
    }

    public void setBlockId(String blockId) {
        this.blockId = blockId;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getCurrentExerciseID() {
        return currentExerciseID;
    }

    public void setCurrentExerciseID(String currentExerciseID) {
        this.currentExerciseID = currentExerciseID;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
