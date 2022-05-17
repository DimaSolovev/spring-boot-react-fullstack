package com.example.demo.student;

import org.apache.catalina.LifecycleState;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {

    @GetMapping
    List<Student> getAllStudent() {
        List<Student> students = Arrays.asList(
                new Student(1L, "Ola", "ola@mail.ru", Gender.FEMALE),
                new Student(2L, "Sergei", "sergei@mail.ru", Gender.MALE),
                new Student(3L, "Irina", "irina@mail.ru", Gender.FEMALE)
        );
        return students;
    }
}
