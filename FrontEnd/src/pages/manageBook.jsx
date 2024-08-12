import React, { useState } from 'react';
import { addBook, getAllBooks } from '../service/bookService';
import { toast } from 'react-toastify';
import BookList from '../components/book';
//import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const ManageBooks = () => {
    //to set title of the page
    document.title = "MANAGE BOOKS";

  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('string');
  const[categoryId, setCategoryId] = useState(0);
  const[authorId, setAuthorId] = useState(0)


  const addBookDetails = async (e) => {
    e.preventDefault();

    const book = {
      title : bookName,
      categoryId,
      categoryName,
      authorId,
      authorName,
      quantityAvailable : quantity,
      description,
    }

    const result = await addBook(book);

    console.log(JSON.stringify(result))
    if(result['status'] === "success"){
      toast.success(result['message'])
    }else{
      toast.error(result['message'])
    }
  }

  const[bookDetail, setBookdetail] = useState([]);

  const loadBooks = async () => {
    const allBooks = await getAllBooks();
    
    console.log(JSON.stringify(allBooks))

    setBookdetail(allBooks)
  }

  return (
   <div>
     <div className="d-flex">
      <div className="sidebar bg-primary text-white p-4">
        {/* <a href="#" className="btn btn-danger mb-3">Back</a> */}
        <div className="mb-3">
          <label className="form-label">Enter Book Name</label>
          <input type="text" className="form-control" 
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Author Name</label>
          <input type="text" className="form-control" 
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Category Name</label>
          <input type="text" className="form-control"
           value={categoryName}
           onChange={(e) => setCategoryName(e.target.value)}
           required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Quantity</label>
          <input type="text" className="form-control"
           value={quantity}
           onChange={(e) => setQuantity(e.target.value)}
           required />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-danger"
          onClick={addBookDetails}>ADD</button>
          <button className="btn btn-danger">UPDATE</button>
          <button className="btn btn-danger">DELETE</button>
        </div>
      </div>
      <div className="content p-4 w-100">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h1>Manage Books</h1>
          <div className="d-grid gap-2">
          <button className="btn btn-danger"
          onClick={loadBooks}>Load Book Details</button>
        </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Book Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Author</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {bookDetail.map((book) => {
              return (
                <BookList
                id = {book.bookId}
                title = {book.bookTitle}
                category = {book.category.categoryName}
                author = {book.authors[0].authorName}
                quantity = {book.quantity}
        
                />
              )
            })}
          </tbody>
        </table>
        
      </div>
    </div>
   </div>
         
  );
};

export default ManageBooks;
