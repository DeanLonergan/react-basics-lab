import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
const course = [
  {
    name: "Applied Computing",
    semester: 5
  }
];
const modules = [
  {
    name: "Developer Operations",
    noLectures: 2,
    noPracticals: 3
  },
  {
    name: "Web App Dev 2",
    noLectures: 3,
    noPracticals: 2
  }
];
const Demo = () => {
  return (
    <div>
      <h2>{course[0].name} - Semester {course[0].semester}</h2>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>{modules[0].name}</td>
          <td>{modules[0].noLectures}</td>
          <td>{modules[0].noPracticals}</td>
        </tr>
        <tr>
          <td>{modules[1].name}</td>
          <td>{modules[1].noLectures}</td>
          <td>{modules[1].noPracticals}</td>
        </tr>
      </tbody >
    </table>
  </div>
  );
};

export default Demo;
