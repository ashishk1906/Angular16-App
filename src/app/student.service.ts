import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private selectedStudent?: Student;

  students: Student[] = [
    { id: 1, name: 'Alice', age: 20, grade: 'A', isActive: true },
    { id: 2, name: 'Bob', age: 22, grade: 'B', isActive: false },
    { id: 3, name: 'Charlie', age: 23, grade: 'A', isActive: true },
  ];

  setSelectedStudent(student: Student) {
    this.selectedStudent = student;
  }

  getSelectedStudent(): Student | undefined {
    return this.selectedStudent;
  }

  getStudents(): Student[] {
    return this.students;
  }
}
