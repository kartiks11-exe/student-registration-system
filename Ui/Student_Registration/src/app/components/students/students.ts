import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../../services/student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './students.html'
})
export class Students implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.studentService.getStudents().subscribe((res: any) => {
      this.students = Array.isArray(res) ? res : (res.value || []);
      this.cdr.detectChanges();
    });
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => {
        console.error('Delete failed for ID:', id, err);
        alert('Delete failed. Please try again.');
      }
    });
  }
}
