package de.neuefische.spring_request_params.exception;

public class StudentNotFoundException extends RuntimeException {

    public StudentNotFoundException() {
        super("The requested student could not be found!");
    }
}
