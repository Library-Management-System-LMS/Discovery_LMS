import React from 'react';

function ViewIssuedBook() {
    //to set title of the page
    document.title = "VIEW ISSUED BOOK";
  return (
    <div className="container d-flex flex-row justify-content-between h-100">
      <div className="issued-book-details col-md-6 bg-danger text-white d-flex flex-column justify-content-center align-items-start px-5 py-3">
        {/* <img src="book-icon.png" alt="Book Icon" width="50" /> */}
        <h2>Issued Book Details</h2>
        <p>Issue Id:</p>
        <p>Book Name:</p>
        <p>User Name:</p>
        <p>Issue Date:</p>
        <p>Due Date:</p>
      </div>
      <div className="return-book col-md-6 d-flex flex-column justify-content-between align-items-center px-5 py-3">
        {/* <div className="close-button">&times;</div> */}
        <h2>Return Book</h2>
        <input type="text" className="form-control mb-3" placeholder="Enter Book Id..." />
        <input type="text" className="form-control mb-3" placeholder="Enter Student Id..." />
        <div className="d-flex justify-content-between w-100">
          <button className="btn btn-primary me-3">Find Details</button>
          <button className="btn btn-danger">Return Book</button>
        </div>
      </div>
    </div>
  );
}

export default ViewIssuedBook;
