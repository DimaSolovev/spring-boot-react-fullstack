package com.example.demo.student;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void addStudent(Student student) {
        Boolean existsEmail  = studentRepository.selectExistsEmail(student.getEmail());
        if(existsEmail){
            throw new IllegalStateException("Email " + student.getEmail() + " taken");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {

        if(!studentRepository.existsById(studentId)){
            throw new IllegalStateException("Student with id " + studentId + " does not exists");
        }
        studentRepository.deleteById(studentId);
    }
}
