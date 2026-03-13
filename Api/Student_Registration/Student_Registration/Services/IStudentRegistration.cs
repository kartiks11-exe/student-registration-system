using Student_Registration.Model.Domain;
using Student_Registration.Model.DTO;


namespace Student_Registration.Services
{
    public interface IStudentRegistration
    {
        Task<List<Student>> GetAllStudentsAsync();

        Task<Student> AddStudentAsync(AddStudentDto dto);

        Task<Student> UpdateStudentAsync(int id, UpdateStudentDto dto);

        Task<Student> GetStudentByIdAsync(int id);

        Task<bool> DeleteStudentAsync(int id);
    }
}
