import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students = this.studentService.getStudents();
  message = ''; 
  selectedStudent?: Student;

  productData: any; 
  userIntros: any;  
  errorMessage: string = ''; 

  constructor(
    private studentService: StudentService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
   
    this.dataService.getProduct().subscribe(
      (data: any) => {
        this.productData = data;
      },
      (error: any) => {
        console.error('Error fetching product data:', error);
      }
    );

    
    this.dataService.getUserIntros().subscribe(
      (data: any) => {
        this.userIntros = data;
      },
      (error: any) => {
        console.error('Error fetching user intros:', error);
        this.errorMessage = 'Failed to load user intros data';
      }
    );
  }

  viewDetails(student: Student) {
    this.selectedStudent = student;
  }

  handleBackClick() {
    this.message = 'Returned to Student List';
    this.selectedStudent = undefined;
  }
}
