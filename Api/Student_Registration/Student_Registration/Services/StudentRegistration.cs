using Microsoft.EntityFrameworkCore;
using Student_Registration.Data;
using Student_Registration.Model.Domain;
using Student_Registration.Model.DTO;


namespace Student_Registration.Services
{
    public class StudentRegistration : IStudentRegistration
    {
        private readonly AppDbContext dbcontext;

        public StudentRegistration(AppDbContext dbcontext)
        {
            this.dbcontext= dbcontext;

        }
        public async Task<Student> AddStudentAsync(AddStudentDto dto)
        {
            var student = new Student
            {
                Name = dto.Name,
                Email = dto.Email,
                Age = dto.Age,
                Course = dto.Course,
                Phone = dto.Phone,
                Address = dto.Address
            };

            await dbcontext.Students.AddAsync(student);
            await dbcontext.SaveChangesAsync();

            return student;

        }

        public async Task<bool> DeleteStudentAsync(int id)
        {
            var student = await dbcontext.Students.FindAsync(id);

            if(student == null)
            {
                return false;
            }

            dbcontext.Students.Remove(student);
            await dbcontext.SaveChangesAsync();
            return true;

        }

        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await dbcontext.Students.ToListAsync();
        }

        public async Task<Student> GetStudentByIdAsync(int id)
        {
            return await dbcontext.Students.FindAsync(id);
        }

        public async Task<Student> UpdateStudentAsync(int id, UpdateStudentDto dto)
        {
            var student = await dbcontext.Students.FindAsync(id);

            if(student == null)
            {
                return null;
            }

            student.Name = dto.Name;
            student.Email = dto.Email;
            student.Age = dto.Age;
            student.Course= dto.Course;
            student.Phone = dto.Phone;
            student.Address = dto.Address;

            await dbcontext.SaveChangesAsync();

            return student;
        }
    }
}
