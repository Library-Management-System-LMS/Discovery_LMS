import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getBook } from '../service/bookService';
import { borrowBook } from '../service/borrowService';
import { getUser } from '../service/userService';

const BorrowBook = () => {

  document.title = "BORROW BOOK";

  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [status, setStatus] = useState('BORROWED')

  const onSubmit = async (e) => {
    e.preventDefault();

    const details = {
      bookId,
      userId,
      status,
      borrowDate,
      returnDate,
    }

    const result = await borrowBook(details)
    // console.log(JSON.stringify(result))

    
    if(result['status'] === 'success')
      toast.success(result['message'])
  }


  // const [bookData, setBookData] = useState({
  //   BookId: '',
  //   BookName: '',
  //   Author: '',
  //   Quantity: '',
  // })

  const [bId, setBId] = useState('');
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');


  // const handleInputChange = (e) => {
  //   setBookData({ ...bookData, [e.target.name]: e.target.value });
  // };

  const getBookDetails = async (e) => {
    e.preventDefault();

    const result = await getBook(bId);

    // console.log(JSON.stringify(result))
    setBookName(result['bookTitle'])
    setQuantity(result['quantity'])
    setAuthor(result['authors'][0]['authorName'])
  }


  const [uId, setUId] = useState('');
  const [userName, setUserName] = useState('');

  const getUserDetails = async (e) => {
    e.preventDefault();

    const result = await getUser(uId);

    console.log(JSON.stringify(result));

    setUserName(result['firstName'])
  }



  return (
    <div className="container issue-book-container mt-5">
      <div className="row">
        <div className="col-md-6 book-details border rounded p-3">
          <h2>Book Details</h2>
          <div className='form-group mb-2'>
          <label htmlFor="bookId">Book id:</label>
            <input
              type="number"
              id="bookId"
              name="bookId"
              className="form-control"
              value={bId}
              onChange={(e) => setBId(e.target.value)}
              required
            />
          </div>
          <p>Book Name: {bookName}</p>
          <p>Author: {author}</p>
          <p>Quantity: {quantity}</p>
          <div className="text-center">
        <button type="button" className="btn btn-warning mt-3"
        onClick={getBookDetails}>Find BOOK</button>
      </div>
        </div>

        <div className="col-md-6 user-details border rounded p-3">
          <h2>User Details</h2>
          <div className='form-group mb-2'>
          <label htmlFor="userId">User id:</label>
            <input
              type="number"
              id="userId"
              name="userId"
              className="form-control"
              value={uId}
              onChange={(e) => setUId(e.target.value)}
              required
            />
          </div>
          <p>User Name: {userName}</p>
            <div className="text-center">
              <button type="button" className="btn btn-warning mt-3"
              onClick={getUserDetails}>Find User</button>
           </div>
        </div>
        
      </div>

      <div className="row mt-4 justify-content-center">
  <div className="col-12 col-md-6 issue-book border rounded p-3">
    <h2 className="text-center">Issue Book</h2>
    <form>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="book-id" className="col-form-label mr-2">Book Id:</label>
        <input type="text" id="book-id" className="form-control"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        required />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="user-id" className="col-form-label mr-2">User Id:</label>
        <input type="text" id="user-id" className="form-control"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="borrow-date" className="col-form-label mr-2">Issue Date:</label>
        <input type="date" id="issue-date" className="form-control"
        value={borrowDate}
        onChange={(e) => setBorrowDate(e.target.value)}
        required />
      </div>
      <div className="form-group d-flex justify-content-between align-items-center">
        <label htmlFor="return-date" className="col-form-label mr-2">Due Date:</label>
        <input type="date" id="due-date" className="form-control" 
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        required/>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-warning mt-3"
        onClick={onSubmit}>BORROW BOOK</button>
      </div>
    </form>
  </div>
</div>


    </div>
  );
};

export default BorrowBook;
