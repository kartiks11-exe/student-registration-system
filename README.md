\# Student Registration System



A \*\*Full Stack Student Registration System\*\* built using \*\*Angular (Frontend)\*\* and \*\*ASP.NET Core Web API (Backend)\*\*.

This project allows administrators to manage student records including adding, updating, viewing, and deleting students.



---



\## Tech Stack



\### Frontend



\* Angular

\* TypeScript

\* HTML

\* CSS

\* Bootstrap



\### Backend



\* ASP.NET Core Web API

\* Entity Framework Core

\* C#



\### Database



\* SQL Server



---



\## Project Structure



```

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

```



---



\## Features



\* Admin Login

\* Add Student

\* Update Student

\* Delete Student

\* View All Students

\* RESTful API architecture

\* Clean layered architecture (Controller → Service → Data)



---



\## API Endpoints



| Method | Endpoint            | Description       |

| ------ | ------------------- | ----------------- |

| GET    | `/api/student`      | Get all students  |

| GET    | `/api/student/{id}` | Get student by ID |

| POST   | `/api/student`      | Add a new student |

| PUT    | `/api/student/{id}` | Update student    |

| DELETE | `/api/student/{id}` | Delete student    |



---



\## How to Run the Project



\### Backend (ASP.NET Core)



1\. Navigate to API folder



```

cd Api/Student\_Registration

```



2\. Restore packages



```

dotnet restore

```



3\. Run the API



```

dotnet run

```



API will run at:



```

https://localhost:5001

```



---



\### Frontend (Angular)



1\. Navigate to UI folder



```

cd Ui/Student\_Registration

```



2\. Install dependencies



```

npm install

```



3\. Run Angular app



```

ng serve

```



Open browser:



```

http://localhost:4200

```



---



\## Future Improvements



\* JWT Authentication

\* Role-based access (Admin/User)

\* Pagination for student list

\* Search and filter functionality

\* Deployment to cloud



---



\## Author



\*\*Kartikeya Singh\*\*



B.Tech Computer Science Engineering

Interested in \*\*Cybersecurity, Cloud, and Full Stack Development\*\*



GitHub:

https://github.com/kartiks11-exe



