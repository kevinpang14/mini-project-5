import React from "react";
import StudentContainer from "./containers/StudentContainer";
import StudentDetail from "./components/StudentDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<StudentContainer />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
