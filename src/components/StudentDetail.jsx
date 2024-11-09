import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const StudentDetail = ({ toggleModal }) => {
  const { id } = useParams(); //"id" same with path in App.jsx

  const {
    isLoading,
    apiData: student,
    serverError,
  } = useFetch(`/students/${id}`, "GET");

  if (isLoading) return <p>Loading...</p>;
  // if (serverError) return <p>Error: {serverError.message}</p>;

  return (
    <>
      <div className="modal-overlay">
        <div>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Student Detail</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Name: </strong> {student.name}
                </p>
                <p>
                  <strong>NIM: </strong> {student.nim}
                </p>
                <p>
                  <strong>Address: </strong> {student.address}
                </p>
                <p>
                  <strong>Guardian Name: </strong> {student.guardian_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;
