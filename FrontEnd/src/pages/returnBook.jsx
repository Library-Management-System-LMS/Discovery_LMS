import { useState, useEffect } from 'react';
import { getBorrowDetails, returnBook } from '../service/borrowService';
import { toast } from 'react-toastify';

const ReturnBook = () => {
  //to set title of the page
  document.title = "RETURN BOOK";
  const [borrowDetails, setBorrowDetails] = useState([]);
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');


  const handleFindDetails = async (e) => {
    e.preventDefault();
    const result = await getBorrowDetails(userId)

    setBorrowDetails(result)
    setBookId(borrowDetails.bookId)
    // setUserId(borrowDetails.userId)

  };

  const handleReturnBook = async (e) => {
    e.preventDefault();

    const body = {
      userId,
      bookId,
    }

    const result = await returnBook(body)

    if(result['status'] === 'success'){
      toast.success(result['message'])
    }else if(result['status'] === 'returned'){
      toast.done(result['message'])
    }

    toast.error('fail to return book')
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 bg-danger text-white p-4">
          <h1>Issued Book Details</h1>
          <p><strong>Issue Id:</strong> {borrowDetails.id}</p>
          <p><strong>Book Name:</strong> {borrowDetails.bookName}</p>
          <p><strong>User Name:</strong> {borrowDetails.userName}</p>
          <p><strong>Borrow Date:</strong> {borrowDetails.borrowDate}</p>
          <p><strong>Due Date:</strong> {borrowDetails.returnDate}</p>
          <p><strong>Borrow Status:</strong> {borrowDetails.status}</p>

          
        </div>
        <div className="col-md-6 bg-light p-4">
          <h1>Return Book</h1>
          <form>
            <div className="form-group">
              <label htmlFor="userId">User Id:</label>
              <input
                type="text"
                id="userId"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            &nbsp;
            {/* <div style="padding-left: 20px;"></div> */}
            <div class="button-container" >
              <button type="button" className="btn btn-primary btn-block mb-2"
               onClick={handleFindDetails}>
                Find Details
              </button>&nbsp;
              <button type="button" className="btn btn-danger btn-block"
               onClick={handleReturnBook}>
                Return Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReturnBook;
