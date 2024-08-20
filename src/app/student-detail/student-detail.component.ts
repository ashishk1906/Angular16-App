import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  selectedStudent?: Student;

  students: Student[] = [
    { id: 1, name: 'Alice', age: 20, grade: 'A', isActive: true },
    { id: 2, name: 'Bob', age: 22, grade: 'B', isActive: false },
    { id: 3, name: 'Charlie', age: 23, grade: 'A', isActive: true }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedStudent = this.students.find(student => student.id === id);
  }

  goBack(): void {
    this.router.navigate(['/students']);
  }
}
