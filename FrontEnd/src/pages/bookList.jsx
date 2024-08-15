import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../service/bookService';
import BookList from '../components/book';
import { toast } from 'react-toastify';

function ListBook () {
    //to set title of the page
    document.title = "MANAGE BOOKS";



  useEffect(() => {
    loadBooks();
  }, [])

  function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.data);
        toast.error('Please try again later.');
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        toast.error('No response from the server.');
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
        // alert('An unexpected error occurred. Please try again.');
    }
}

  const emptyArr = [];

  const[bookDetail, setBookdetail] = useState([]);

    const loadBooks = async () => {

        try {
            const allBooks = await getAllBooks();
            console.log(JSON.stringify(allBooks))
            setBookdetail(allBooks)
        } catch (error) {
            handleError(error);
        }
  }

  return (
      <div className="content p-4 w-100">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h1>List of Books</h1>
          <div className="d-grid gap-2">
        </div>
            </div>
                    {Object.keys(bookDetail).length !== emptyArr.length ?
                 <table className="table table-striped table-bordered table-hover">
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
                : <p>Could not load books</p>}
        </div>
         
  );
};

export default ListBook;
