package fr.isep.models;

public class Exercise {
    public static final String EXERCISE_ID = "exerciseid";
    public static final String TITLE = "title";
    public static final String CONTENT = "content";
    public static final String BLOCK_XML = "blockxml";


    private int exerciseid;
    private String title;
    private String content;
    private String blockxml;

    public int getExerciseid() {
        return exerciseid;
    }

    public void setExerciseid(int exerciseid) {
        this.exerciseid = exerciseid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getBlockxml() {
        return blockxml;
    }

    public void setBlockxml(String blockxml) {
        this.blockxml = blockxml;
    }
}
