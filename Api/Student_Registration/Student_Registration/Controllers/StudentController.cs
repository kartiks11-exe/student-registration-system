using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Student_Registration.Services;

namespace Student_Registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRegistration studentRegistration;

        public StudentController(IStudentRegistration studentRegistration)
        {
            this.studentRegistration = studentRegistration;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await studentRegistration.GetAllStudentsAsync();
            return Ok(students);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetStudentById(int id)
        {
            var student = await studentRegistration.GetStudentByIdAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent(Model.DTO.AddStudentDto dto)
        {
            var student = await studentRegistration.AddStudentAsync(dto);
            return Ok(student);
        }

        [HttpPost("{id:int}")]
        public async Task<IActionResult> UpdateStudent(int id, Model.DTO.UpdateStudentDto dto)
        {
            var student = await studentRegistration.UpdateStudentAsync(id, dto);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var result = await studentRegistration.DeleteStudentAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}
