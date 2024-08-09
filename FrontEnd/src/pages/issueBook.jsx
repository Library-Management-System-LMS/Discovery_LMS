import React from 'react';

const IssueBook = () => {

  document.title = "ISSUE BOOK";

  return (
    <div className="container issue-book-container mt-5">
      <div className="row">
        <div className="col-md-6 book-details border rounded p-3">
          <h2>Book Details</h2>
          <p>Book Id: 5</p>
          <p>Book Name: Java: A Beginner's Guide</p>
          <p>Author: Herbert Schildt</p>
          <p>Quantity: 3</p>
        </div>

        <div className="col-md-6 user-details border rounded p-3">
          <h2>User Details</h2>
          <p>User Id: 7</p>
          <p>User Name: Tony</p>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
  <div className="col-12 col-md-6 issue-book border rounded p-3">
    <h2 className="text-center">Issue Book</h2>
    <form>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="book-id" className="col-form-label mr-2">Book Id:</label>
        <input type="text" id="book-id" className="form-control" />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="user-id" className="col-form-label mr-2">User Id:</label>
        <input type="text" id="user-id" className="form-control" />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="issue-date" className="col-form-label mr-2">Issue Date:</label>
        <input type="date" id="issue-date" className="form-control" />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="due-date" className="col-form-label mr-2">Due Date:</label>
        <input type="date" id="due-date" className="form-control" />
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-danger mt-3">ISSUE BOOK</button>
      </div>
    </form>
  </div>
</div>


    </div>
  );
};

export default IssueBook;
