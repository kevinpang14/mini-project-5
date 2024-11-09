import React, { useState, useEffect } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const StudentContainer = () => {
  const { isLoading, apiData, serverError } = useFetch("/students", "GET");
  const [students, setStudents] = useState([
    {
      id: "074b8096-517b-42cb",
      name: "Cecil",
      class: "Science 1",
      year: "2024", // min 2000 max 2024
      nim: "2024002", // must be unique
      guardian_name: "Rena",
      birthDate: "2006-06-24", // https://www.iso.org/iso-8601-date-and-time-format.html
      address: "West Fairmount Road 1", // min 20 character
      gender: "male", // male or female
    },
    {
      id: "074b8096-517b-42csdf",
      name: "Kyle",
      class: "Science 1",
      year: "2024",
      nim: "2024003",
      guardian_name: "Rena",
      birthDate: "2006-06-24",
      address: "West Fairmount Road 1",
      gender: "male",
    },
  ]);
  const [modalForm, setModalForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [currentStudent, setCurrentStudent] = useState({
    name: "",
    class: "",
    year: "",
    nim: "",
    guardian_name: "",
    birthDate: "",
    address: "",
    gender: "",
  });

  const navigate = useNavigate();

  //if apidata is not null, set students to apidata, if not use dummy data
  useEffect(() => {
    if (apiData) {
      setStudents(apiData);
    }
    console.log("apiData", apiData);
  }, [apiData]);

  if (isLoading) return <p>Loading...</p>;
  // if (serverError) return <p>Error loading data: {serverError.message}</p>;

  const toggleModalForm = (student = null) => {
    setCurrentStudent(
      student || {
        name: "",
        class: "",
        year: "",
        nim: "",
        guardian_name: "",
        birthDate: "",
        address: "",
        gender: "",
      }
    );
    setIsEdit(!!student);
    setModalForm(!modalForm);
  };

  const handleAddStudent = () => {
    const { isLoading, apiData, serverError } = useFetch(
      "/students",
      "POST",
      currentStudent
    );
    if (apiData) {
      setStudents([...students, apiData]);
      toggleModalForm();
    }
  };

  const handleUpdateStudent = () => {
    const { isLoading, apiData, serverError } = useFetch(
      `/students/${currentStudent.nim}`,
      "PUT",
      currentStudent
    );
    if (apiData) {
      const updatedStudents = students.map((student) =>
        student.nim === currentStudent.nim ? apiData : student
      );
      setStudents(updatedStudents);
      toggleModalForm();
    }
  };

  const handleDeleteStudent = (studentId) => {
    const { isLoading, apiData, serverError } = useFetch(
      `/students/${studentId}`,
      "DELETE"
    );
    if (!serverError) {
      setStudents(students.filter((student) => student.nim !== studentId));
    }
  };

  return (
    <>
      <StudentTable
        students={students}
        toggleModalForm={() => toggleModalForm(null)}
        handleEditStudent={toggleModalForm}
        handleDeleteStudent={handleDeleteStudent}
        toggleModalDetail={(student) => navigate(`/students/${student.id}`)}
      />

      {modalForm && (
        <StudentForm
          student={currentStudent}
          onChange={(e) =>
            setCurrentStudent({
              ...currentStudent,
              [e.target.name]: e.target.value,
            })
          }
          toggleModal={toggleModalForm}
          onSubmit={isEdit ? handleUpdateStudent : handleAddStudent}
          isEdit={isEdit}
        />
      )}
    </>
  );
};

export default StudentContainer;

// export default class StudentContainer extends Component {
//   state = {
//     modalForm: false,
//     modalDetail: false,
//     isEdit: false,
//     editedStudent: null,
//     students: [
//       {
//         name: "Gregory",
//         nim: "1921685",
//         birthDate: "2001-01-01",
//         address: "Almaty",
//         guardianName: "Lala",
//       },
//       {
//         name: "John Doe",
//         nim: "1921225",
//         birthDate: "2001-01-01",
//         address: "Malang",
//         guardianName: "Dipsy",
//       },
//       {
//         name: "Jane Smith",
//         nim: "19236999",
//         birthDate: "2001-01-01",
//         address: "Blitar",
//         guardianName: "Poo",
//       },
//     ],
//     currentStudent: {
//       name: "",
//       nim: "",
//       birthDate: "",
//       address: "",
//       guardianName: "",
//     },
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       currentStudent: {
//         ...prevState.currentStudent,
//         [name]: value,
//       },
//     }));
//     console.log(this.state.currentStudent);
//     console.log(`${e.target.name}: ${e.target.value}`);
//     console.log(e.target);
//   };

//   toggleModalForm = (isEdit = false) => {
//     this.setState({ isEdit: isEdit, modalForm: !this.state.modalForm });
//     this.setState({
//       currentStudent: {
//         name: "",
//         nim: "",
//         birthDate: "",
//         address: "",
//         guardianName: "",
//       },
//     });
//   };

//   handleEditStudent = (student, index) => {
//     this.setState({
//       currentStudent: student,
//       isEdit: true,
//       modalForm: !this.state.modalForm,
//       editedStudent: index,
//     });
//   };

//   toggleModalDetail = () => {
//     this.setState({ modalDetail: !this.state.modalDetail });
//     console.log(this.state.currentStudent);
//     this.setState({
//       currentStudent: {
//         name: "",
//         nim: "",
//         birthDate: "",
//         address: "",
//         guardianName: "",
//       },
//     });
//   };

//   handleAddOrUpdateStudent = () => {
//     const { currentStudent, isEdit } = this.state;

//     if (isEdit) {
//       const index = this.state.editedStudent;
//       const updateStudent = [...this.state.students];
//       updateStudent[index] = currentStudent;
//       this.setState({ students: updateStudent });
//     } else {
//       this.setState((prevState) => ({
//         students: [...prevState.students, currentStudent],
//       }));
//     }
//     this.setState({
//       currentStudent: {
//         name: "",
//         nim: "",
//         birthDate: "",
//         address: "",
//         guardianName: "",
//       },
//     });
//     console.log(currentStudent);

//     this.toggleModalForm(this.state.isEdit);
//   };

//   handleDeleteStudent = (index) => {
//     const { students } = this.state;
//     const newStudents = students.filter((_, i) => i !== index);
//     this.setState({
//       students: newStudents,
//     });
//   };

//   handleInfoStudent = (student) => {
//     this.setState({
//       currentStudent: student,
//       modalDetail: !this.state.modalDetail,
//     });
//   };

//   componentDidMount() {
//     this.loadStudentData();
//   }

//   loadStudentData = async () => {
//     try {
//       const students = await listStudents();
//       this.setState({ students });
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   render() {
//     return (
//       <>
//         <StudentTable
//           students={this.state.students}
//           toggleModalForm={this.toggleModalForm}
//           toggleModalDetail={this.handleInfoStudent}
//           handleEditStudent={this.handleEditStudent}
//           handleDeleteStudent={this.handleDeleteStudent}
//         ></StudentTable>

//         {this.state.modalForm && (
//           <StudentForm
//             onChange={this.handleInputChange}
//             toggleModal={this.toggleModalForm}
//             student={this.state.currentStudent}
//             isEdit={this.state.isEdit}
//             onSubmit={this.handleAddOrUpdateStudent}
//           />
//         )}

//         {this.state.modalDetail && (
//           <StudentDetail
//             toggleModal={this.toggleModalDetail}
//             student={this.state.currentStudent}
//           />
//         )}
//       </>
//     );
//   }
// }
