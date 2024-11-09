import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const StudentList = () => {
  const {
    isLoading,
    apiData: students,
    serverError,
  } = useFetch("/students", "GET");

  if (isLoading) return <p>Loading...</p>;
  if (serverError) return <p>Error loading data: {serverError.message}</p>;

  return (
    <ul>
      {students &&
        students.map((student) => <li key={student.id}>{student.name}</li>)}
    </ul>
  );
};

export default StudentList;
