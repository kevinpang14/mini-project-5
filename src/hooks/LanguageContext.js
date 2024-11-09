// import React, { createContext, useContext, useState } from "react";

// export const LanguageContext = createContext();

// const defaultLanguage = "en";

// const translations = {
//   en: {
//     listOfStudents: "List of Students",
//     name: "Name",
//     nim: "NIM",
//     address: "Address",
//     guardianName: "Guardian Name",
//     class: "Class",
//     year: "Year",
//     birthdate: "Birthdate",
//     gender: "Gender",
//     addNew: "Add New",
//     action: "Action",
//     student: "Student",
//     addStudent: "Add Student",
//     editStudent: "Edit Student",
//     deleteStudent: "Delete Student",
//     details: "Details",
//   },

//   id: {
//     listOFStudents: "Daftar Siswa",
//     student: "Siswa",
//     nim: "NIM",
//     address: "Alamat",
//     guardianName: "Nama Wali",
//     class: "Kelas",
//     year: "Tahun",
//     birthdate: "Tanggal Lahir",
//     Gender: "Jenis Kelamin",
//     addNew: "Tambah Baru",
//     action: "Aksi",
//     addStudent: "Tambah Siswa",
//     editStudent: "Edit Siswa",
//     deleteStudent: "Hapus Siswa",
//     details: "Detail",
//   },
// };

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(defaultLanguage);

//   const switchLanguage = (newLanguage) => {
//     setLanguage(newLanguage);
//   };
//   return (
//     <LanguageContext.Provider
//       value={{
//         language,
//         switchLanguage,
//         translations,
//       }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// };
