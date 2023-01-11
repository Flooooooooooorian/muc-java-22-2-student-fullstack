package de.neuefische.spring_request_params.service;

import de.neuefische.spring_request_params.exception.StudentNotFoundException;
import de.neuefische.spring_request_params.model.Student;
import de.neuefische.spring_request_params.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    private final StudentRepo studentRepo;
    private final IdService idService;

    @Autowired
    public StudentService(StudentRepo studentRepo, IdService idService) {
        this.studentRepo = studentRepo;
        this.idService = idService;
    }

    public List<Student> list() {
        return studentRepo.findAll();
    }

    public Student findById(String id) {
        return studentRepo.findById(id)
                .orElseThrow(() -> new StudentNotFoundException());
    }

    public Student addStudent(Student student) {
        student.setId(idService.generateId());
        return studentRepo.save(student);
    }

    public List<Student> search(String s) {
        List<Student> searchResultList = new ArrayList<>();
        for (Student student : list()) {
            if (student.getName().contains(s)) {
                searchResultList.add(student);
            }
        }

        return searchResultList;
    }

    public void delete(String id) {
        Student student = findById(id);
        studentRepo.delete(student);
    }
}
