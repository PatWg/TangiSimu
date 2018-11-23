package fr.isep.models;

import com.google.gson.Gson;

public class DeleteBlockLog extends EventLog {
    private String[] ids;

    public String[] getIds() {
        return ids;
    }

    public void setIds(String[] ids) {
        this.ids = ids;
    }

    public String getIdsAsString() {
        Gson gson = new Gson();
        return gson.toJson(this.ids);
    }
}
