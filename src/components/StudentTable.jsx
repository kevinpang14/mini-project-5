import React from "react";
import { Link } from "react-router-dom";

const StudentTable = ({
  toggleModalForm,
  students,
  handleEditStudent,
  handleDeleteStudent,
}) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table caption-top table-hover table-bordered table-light align-middle">
          <caption className="text-center">
            <strong>List of Students</strong>
          </caption>
          <thead>
            <tr>
              <th scope="col" colSpan="4" className="px-3">
                <button
                  onClick={() => toggleModalForm(false)}
                  className="btn btn-primary float-end fw-bold"
                >
                  <i className="bi bi-plus-circle me-2"></i>Add New
                </button>
              </th>
            </tr>
            <tr className="text-center">
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">NIM</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row" className="text-center">
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm float-end mx-2 my-1"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    className="btn btn-outline-warning btn-sm float-end mx-2 my-1"
                    onClick={() => handleEditStudent(student)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <Link
                    to={`/students/${student.id}`}
                    className="btn btn-outline-info btn-sm float-end mx-2 my-1"
                  >
                    <i className="bi bi-info-circle"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
