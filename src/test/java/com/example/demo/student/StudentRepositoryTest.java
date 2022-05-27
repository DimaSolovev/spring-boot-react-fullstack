package com.example.demo.student;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class StudentRepositoryTest {

    @Autowired
    private StudentRepository studentRepository;

    @AfterEach
    void tearDown(){
        studentRepository.deleteAll();
    }

    @Test
    void itShouldCheckIfStudentExistsEmail() {
        String email = "jamila@mail.ru";
        Student student = new Student(
                "Jamila",
                email,
                Gender.FEMALE
        );
        studentRepository.save(student);
        boolean exists = studentRepository.selectExistsEmail(email);
         assertThat(exists).isTrue();
    }

    @Test
    void itShouldCheckIfStudentEmailDoesNotExists() {
        String email = "jamila@mail.ru";
        boolean exists = studentRepository.selectExistsEmail(email);
        assertThat(exists).isFalse();
    }
}