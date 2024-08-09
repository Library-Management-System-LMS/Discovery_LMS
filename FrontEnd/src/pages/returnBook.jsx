import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReturnBook = () => {
  //to set title of the page
  document.title = "RETURN BOOK";
  const [issueDetails, setIssueDetails] = useState({});
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch issued book details from backend (replace with your API endpoint)
    fetch('')
      .then(response => response.json())
      .then(data => setIssueDetails(data))
      .catch(error => console.error('Error fetching issued book details:', error));
  }, []);

  const handleFindDetails = () => {
    // Handle find details logic
    console.log('Finding details for Book ID:', bookId, 'Student ID:', userId);
  };

  const handleReturnBook = () => {
    // Handle return book logic
    console.log('Returning book for Book ID:', bookId, 'Student ID:', userId);
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 bg-danger text-white p-4">
          <h1>Issued Book Details</h1>
          <p><strong>Issue Id:</strong> {issueDetails.issueId}</p>
          <p><strong>Book Name:</strong> {issueDetails.bookName}</p>
          <p><strong>User Name:</strong> {issueDetails.usertName}</p>
          <p><strong>Issue Date:</strong> {issueDetails.issueDate}</p>
          <p><strong>Due Date:</strong> {issueDetails.dueDate}</p>
        </div>
        <div className="col-md-6 bg-light p-4">
          <h1>Return Book</h1>
          <form>
            <div className="form-group">
              <label htmlFor="bookId">Book Id:</label>
              <input
                type="text"
                id="bookId"
                className="form-control"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>
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
              <button type="button" className="btn btn-primary btn-block mb-2" onClick={handleFindDetails}>
                Find Details
              </button>&nbsp;
              <button type="button" className="btn btn-danger btn-block" onClick={handleReturnBook}>
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
