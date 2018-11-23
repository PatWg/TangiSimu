package fr.isep.models;

public class CombineBlockLog extends EventLog {
    private String newParentId;
    private String newInputName;


    public String getNewParentId() {
        return newParentId;
    }

    public void setNewParentId(String newParentId) {
        this.newParentId = newParentId;
    }

    public String getNewInputName() {
        return newInputName;
    }

    public void setNewInputName(String newInputName) {
        this.newInputName = newInputName;
    }
}
