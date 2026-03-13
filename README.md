Student Registration System



A Full Stack Student Registration System built using Angular (Frontend) and ASP.NET Core Web API (Backend).

This project allows administrators to manage student records including adding, updating, viewing, and deleting students.



---


 Tech Stack

Frontend

1. Angular

2. TypeScript

3. HTML

4. CSS

5. Bootstrap


Backend

1. ASP.NET Core Web API

2. Entity Framework Core

3. C#



Database

1. SQL Server



------------------------------

 Project Structure


student-registration-system

│

├── Api

│   └── Student\_Registration

│       ├── Controllers

│       ├── Data

│       ├── DTO

│       ├── Domain Models

│       ├── Services

│       └── Migrations

│

├── Ui

│   └── Student\_Registration

│       ├── components

│       ├── services

│       └── app

│

└── .gitignore

------------------------------

Features

1. Admin Login

2. Add Student

3. Update Student

4. Delete Student

5. View All Students

6. RESTful API architecture

7. Clean layered architecture (Controller → Service → Data)

------------------------------

 API Endpoints


| Method | Endpoint            | Description       |

| ------ | ------------------- | ----------------- |

| GET    | `/api/student`      | Get all students  |

| GET    | `/api/student/{id}` | Get student by ID |

| POST   | `/api/student`      | Add a new student |

| PUT    | `/api/student/{id}` | Update student    |

| DELETE | `/api/student/{id}` | Delete student    |



------------------------------







