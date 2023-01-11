package de.neuefische.spring_request_params.service;

import de.neuefische.spring_request_params.exception.StudentNotFoundException;
import de.neuefische.spring_request_params.model.Gender;
import de.neuefische.spring_request_params.model.Student;
import de.neuefische.spring_request_params.repo.StudentRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class StudentServiceTest {
    private final StudentRepo studentRepo = mock(StudentRepo.class);
    private final IdService idService = mock(IdService.class);
    private final StudentService studentService = new StudentService(studentRepo, idService);

    @Test
    public void testListStudents() {
        //GIVEN
        when(studentRepo.findAll()).thenReturn(
                List.of(
                        new Student("1", "Paul", Gender.MALE),
                        new Student("2", "Maria", Gender.FEMALE),
                        new Student("3", "Hannah", Gender.MALE),
                        new Student("4", "Marianne", Gender.DIVERS)
                )
        );

        //WHEN
        List<Student> actual = studentService.list();

        //THEN
        assertThat(actual, containsInAnyOrder(
                new Student("1", "Paul"),
                new Student("2", "Maria"),
                new Student("3", "Hannah"),
                new Student("4", "Marianne")
        ));
    }

    @Test
    public void testSearchStudent() {
        //GIVEN
        when(studentRepo.findAll()).thenReturn(
                List.of(
                        new Student("1", "Paul"),
                        new Student("2", "Maria"),
                        new Student("3", "Hannah"),
                        new Student("4", "Marianne")
                )
        );

        //WHEN
        List<Student> actual = studentService.search("Mari");

        //THEN
        assertThat(actual, containsInAnyOrder(
                new Student("2", "Maria"),
                new Student("4", "Marianne")
        ));
    }

    @Test
    public void testAddStudent() {
        //GIVEN
        Student studentToAdd = new Student("5", "Hans");
        when(studentRepo.save(studentToAdd)).thenReturn(studentToAdd);

        //WHEN
        Student actual = studentService.addStudent(studentToAdd);

        //THEN
        assertThat(actual, is(studentToAdd));
        verify(studentRepo).save(studentToAdd);
    }

    @Test
    public void testFindById() {
        //GIVEN
        when(studentRepo.findById("2")).thenReturn(Optional.of(new Student("2", "Maria")));

        //WHEN
        Student actual = studentService.findById("2");

        //THEN
        assertThat(actual, is(new Student("2", "Maria")));
    }

    @Test
    public void testFindByIdWithNotExistingId() {
        //GIVEN
        when(studentRepo.findById("9")).thenReturn(Optional.empty());

        //WHEN + THEN
        assertThrows(StudentNotFoundException.class, () -> {
            studentService.findById("2");
        });
    }

    @Test
    public void testDelete() {
        //GIVEN
        when(studentRepo.findById("2")).thenReturn(Optional.of(new Student("2", "Maria")));

        //WHEN
        studentService.delete("2");

        //THEN
        verify(studentRepo).delete(new Student("2", "Maria"));

    }

    @Test
    public void testAddStudentWithRandomId() {
        //GIVEN
        Student studentToAdd = new Student(null, "Hans");
        Student addedStudent = new Student("7abc", "Hans");

        when(idService.generateId()).thenReturn("7abc");
        when(studentRepo.save(addedStudent)).thenReturn(addedStudent);

        //WHEN
        Student actual = studentService.addStudent(studentToAdd);

        //THEN
        assertThat(actual, is(studentToAdd));
        verify(studentRepo).save(studentToAdd);
    }
}
