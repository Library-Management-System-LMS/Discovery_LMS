import React, { useState } from 'react';
//import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const ManageBooks = () => {
    //to set title of the page
    document.title = "MANAGE BOOKS";

  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
   <div>
     <div className="d-flex">
      <div className="sidebar bg-primary text-white p-4">
        {/* <a href="#" className="btn btn-danger mb-3">Back</a> */}
        <div className="mb-3">
          <label className="form-label">Enter Book ID</label>
          <input type="text" className="form-control" placeholder="Enter Book ID" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Book Name</label>
          <input type="text" className="form-control" placeholder="Enter Book Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Author Name</label>
          <input type="text" className="form-control" placeholder="Enter Author Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Quantity</label>
          <input type="text" className="form-control" placeholder="Enter Quantity" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-danger">ADD</button>
          <button className="btn btn-danger">UPDATE</button>
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
      <div className="content p-4 w-100">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h1>Manage Books</h1>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Book Id</th>
              <th>Name</th>
              <th>Author</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Introducing Java 8</td>
              <td>Raoul-Gabriel Urma</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Java: The Legend</td>
              <td>Benjamin Evans</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Spring MVC: A tutorial</td>
              <td>Paul Deck</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Core Java Volume I - Fundamentals</td>
              <td>Cay S. Horstmann</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Java: A Beginner's Guide</td>
              <td>Herbert Schildt</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
         
  );
};

export default ManageBooks;
