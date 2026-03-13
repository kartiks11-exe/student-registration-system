import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Students } from './components/students/students';
import { AddStudent } from './components/add-student/add-student';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'students', component: Students },
  { path: 'add-student', component: AddStudent },
  { path: 'edit-student/:id', component: AddStudent }
];
