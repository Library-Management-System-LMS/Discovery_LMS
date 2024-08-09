import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const ManageUsers = () => {
    //to set title of the page
    document.title = "MANAGE USERS";
  const [userId, setuserId] = useState('');
  const [userName, setuserName] = useState('');
  const [courseName, setCourseName] = useState('BSC');
  const [branchName, setBranchName] = useState('CS');

  return (
    <div>
        <div className="d-flex">
      <div className="sidebar bg-primary text-white p-4">
        {/* <a href="#" className="btn btn-danger mb-3">Back</a> */}
        <div className="mb-3">
          <label className="form-label">Enter User ID</label>
          <input type="text" className="form-control" placeholder="Enter User ID" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter User Name</label>
          <input type="text" className="form-control" placeholder="Enter User Name" />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Enter Course Name</label>
          <select className="form-select">
            <option>BSC</option>
            <option>MSC</option>
            <option>B.E</option>
          </select>
        </div> */}
        {/* <div className="mb-3">
          <label className="form-label">Enter Branch Name</label>
          <select className="form-select">
            <option>CS</option>
            <option>IT</option>
            <option>PLAIN</option>
          </select>
        </div> */}
        <div className="d-grid gap-2">
          <button className="btn btn-danger">ADD</button>
          <button className="btn btn-danger">UPDATE</button>
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
      <div className="content p-4 w-100">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h1>Manage Users</h1>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Branch</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sunil</td>
              <td>something@gmail.com</td>
              {/* <td>CS</td> */}
            </tr>
            <tr>
              <td>2</td>
              <td>mangesh</td>
              <td>mangesh@gmail.com</td>
              {/* <td>CS</td> */}
            </tr>
            <tr>
              <td>3</td>
              <td>Deepak</td>
              <td>deepak@gamil.com</td>
              {/* <td>IT</td> */}
            </tr>
            <tr>
              <td>4</td>
              <td>Rahul</td>
              <td>rahul@gmail.com</td>
              {/* <td>PLAIN</td> */}
            </tr>
            <tr>
              <td>5</td>
              <td>Praful</td>
              <td>praful@gmail.com</td>
              {/* <td>IT</td> */}
            </tr>
            <tr>
              <td>6</td>
              <td>Shivam</td>
              <td>shivam@gmail.com</td>
              {/* <td>CS</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ManageUsers;
