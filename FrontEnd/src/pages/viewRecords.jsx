// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


const ViewRecords = () => {
    //to set title of the page
    document.title = "VIEW RECORDS";

  return (
    <div>
      <div className="header">
        <h1>View Records</h1>
      </div>
      <div className="container mt-4 p-4 bg-white shadow">
        <div className="row mb-4">
          <div className="col">
            <input type="date" className="form-control" id="issueDate" name="issueDate" defaultValue="2021-04-26" />
          </div>
          <div className="col">
            <input type="date" className="form-control" id="dueDate" name="dueDate" defaultValue="2021-04-29" />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-danger">Search</button>
          </div>
        </div>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Issue Id</th>
              <th>Book Name</th>
              <th>User Name</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>Core Java Volume I</td>
              <td>Deepak</td>
              <td>2021-04-29</td>
              <td>2021-04-30</td>
              <td className="status-returned">returned</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Core Java Volume I</td>
              <td>Tony</td>
              <td>2021-04-29</td>
              <td>2021-05-05</td>
              <td className="status-pending">pending</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Java: A Beginner's Guide</td>
              <td>Tony</td>
              <td>2021-04-29</td>
              <td>2021-05-06</td>
              <td className="status-returned">returned</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRecords;

