import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>Applied Computing - Semester 5</h2>
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
          <td>Developer Operations</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Web App Dev 2</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>NoSQL Databases</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Model Based Development</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Professional Practice</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Measurement Systems</td>
          <td>3</td>
          <td>2</td>
        </tr>
      </tbody >
    </table>
  </div>
  );
};

export default Demo;
