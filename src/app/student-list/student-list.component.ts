import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students = this.studentService.getStudents();
  message = ''; 
  selectedStudent?: Student; 

  constructor(private studentService: StudentService, private router: Router) {}

  viewDetails(student: Student) {
    this.selectedStudent = student;
  }

  handleBackClick() {
    this.message = 'Returned to Student List';
    this.selectedStudent = undefined; 
  }
}
