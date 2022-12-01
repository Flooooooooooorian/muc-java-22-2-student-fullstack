package de.neuefische.spring_request_params.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdService {

    @Value("${custom.id.prefix}")
    private String idPrefix;

    public String generateId() {
        return idPrefix + UUID.randomUUID();
    }
}
