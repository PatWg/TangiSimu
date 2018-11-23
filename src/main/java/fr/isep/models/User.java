package fr.isep.models;

public class User {
    public static final String USER_ID = "userid";
    public static final String FNAME = "fname";
    public static final String LNAME = "lname";
    public static final String SIM_OR_OBJ = "simorobj";

    private int userid;
    private String fname, lname;
    private boolean simorobj;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public boolean isSimorobj() {
        return simorobj;
    }

    public void setSimorobj(boolean simorobj) {
        this.simorobj = simorobj;
    }
}
