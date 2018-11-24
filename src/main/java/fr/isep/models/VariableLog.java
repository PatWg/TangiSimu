package fr.isep.models;

public class VariableLog extends EventLog {
    private String varId;
    private String varName;

    public String getVarName() {
        return varName;
    }

    public void setVarName(String varName) {
        this.varName = varName;
    }

    public String getVarId() {
        return varId;
    }

    public void setVarId(String varId) {
        this.varId = varId;
        this.blockId = varId;
    }
}
