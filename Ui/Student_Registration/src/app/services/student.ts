import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = "http://localhost:5011/api/student";

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any>(this.apiUrl);
  }

  getStudentById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addStudent(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateStudent(id: number, data: any) {
    return this.http.post(`${this.apiUrl}/${id}`, data);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}