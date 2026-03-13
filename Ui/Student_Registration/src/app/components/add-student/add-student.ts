import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-student.html'
})
export class AddStudent implements OnInit {
  errorMessage: string | null = null;
  isEditMode = false;
  studentId: number | null = null;
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course: new FormControl('', [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.studentId = Number(idParam);
      this.loadStudentData(this.studentId);
    }
  }

  loadStudentData(id: number) {
    this.studentService.getStudentById(id).subscribe({
      next: (res) => {
        this.studentForm.patchValue({
          name: res.name,
          email: res.email,
          course: res.course,
          age: res.age,
          phone: res.phone,
          address: res.address
        });
      },
      error: (err) => {
        this.errorMessage = 'Failed to load student data.';
      }
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const payload = { ...this.studentForm.value, age: Number(this.studentForm.value.age) };
      
      const request = this.isEditMode 
        ? this.studentService.updateStudent(this.studentId!, payload)
        : this.studentService.addStudent(payload);

      request.subscribe({
        next: () => {
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.error('SAVE ERROR:', err);
          this.errorMessage = 'Failed to save student: ' + (err.error?.message || err.message);
        }
      });
    }
  }
}
