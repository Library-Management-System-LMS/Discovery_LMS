import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DefaulterList = () => {
  //to set title of the page
  document.title = "DEFAULTER LIST";

  const [defaulters, setDefaulters] = useState([]);

  useEffect(() => {
    // Replace with your backend API endpoint
    axios.get('')
      .then(response => {
        setDefaulters(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the defaulter list!', error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Defaulter List</h2>
      <div className="d-flex justify-content-center">
        {/* <img src="" alt="Defaulter List" className="img-fluid mb-4" style={{ maxWidth: '100%' }} /> */}
      </div>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="thead-dark">
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
            {defaulters.length > 0 ? (
              defaulters.map(defaulter => (
                <tr key={defaulter.issueId} className="table-primary">
                  <td>{defaulter.issueId}</td>
                  <td>{defaulter.bookName}</td>
                  <td>{defaulter.userName}</td>
                  <td>{defaulter.issueDate}</td>
                  <td>{defaulter.dueDate}</td>
                  <td className={defaulter.status.toLowerCase() === 'pending' ? 'text-danger' : ''}>
                    {defaulter.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No defaulters found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DefaulterList;
