import React from "react";

const StudentForm = ({ toggleModal, student, onChange, isEdit, onSubmit }) => {
  return (
    <>
      <div className="modal-overlay">
        <div>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEdit ? `Edit Student` : `Add Student`}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => toggleModal(isEdit)}
                ></button>
              </div>
              <div className="modal-body">
                {/* FORM START */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={onChange}
                      value={student.name}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nim" className="form-label">
                      NIM
                    </label>
                    <input
                      type="text"
                      name="nim"
                      id="nim"
                      inputMode="numeric"
                      onChange={onChange}
                      value={student.nim}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">
                      Birthdate
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      onChange={onChange}
                      value={student.birthDate}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      onChange={onChange}
                      value={student.address}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="guardian_name" className="form-label">
                      Guardian Name
                    </label>
                    <input
                      type="text"
                      name="guardian_name"
                      id="guardian_name"
                      className="form-control"
                      onChange={onChange}
                      value={student.guardian_name}
                    />
                  </div>
                </form>
                {/* FORM END */}
              </div>
              <div className="modal-footer mt-5">
                <button
                  type="submit"
                  className={`btn ${isEdit ? "btn-warning" : "btn-primary "}`}
                >
                  <i
                    className={`bi ${
                      isEdit ? "bi-pencil-square" : "bi-save"
                    } me-2`}
                  ></i>
                  <span>{isEdit ? "Update" : "Submit"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
