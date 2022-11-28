package de.neuefische.spring_request_params.model;

public enum Gender {
    MALE("m"),
    FEMALE("f"),
    DIVERS("d");

    private final String name;

    private Gender(String name) {
        this.name = name;
    }
}
