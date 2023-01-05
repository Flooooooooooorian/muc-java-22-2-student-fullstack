package de.neuefische.spring_request_params.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Einen Handler erstellen, der StudentNotFoundExceptions behandelt
    // -> Anschließend soll eine Response, d.h. Antwort an den Client versendet werden
    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleStudentNotFoundException(StudentNotFoundException exception) {
        Map<String, Object> responseBody = new LinkedHashMap<>();

        responseBody.put("timestamp", LocalDateTime.now());
        responseBody.put("message", exception.getMessage());

        return new ResponseEntity<>(responseBody, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneralException() {
        Map<String, Object> responseBody = new LinkedHashMap<>();

        responseBody.put("timestamp", LocalDateTime.now());
        responseBody.put("message", "Sorry! The request could be handled!");

        return new ResponseEntity<>(responseBody, HttpStatus.BAD_REQUEST);
    }
}
