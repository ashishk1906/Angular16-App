import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent {
  @Input() student?: Student;
  @Output() backClicked = new EventEmitter<void>(); 

  goBack(): void {
    this.backClicked.emit(); 
  }
}
