package com.example.demo.student;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Student {
    private Long id;
    private String name;
    private String email;
    private Gender gender;
}
