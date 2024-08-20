import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Alice', age: 20, grade: 'A', isActive: true },
    { id: 2, name: 'Bob', age: 22, grade: 'B', isActive: false },
    { id: 3, name: 'Charlie', age: 23, grade: 'A', isActive: true }
  ];
}
