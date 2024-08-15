import React, { useEffect, useState } from 'react';
import { addBook, getAllBooks, getAllCategories } from '../service/bookService';
import { toast } from 'react-toastify';
import BookList from '../components/book';
//import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const ManageBooks = () => {
    //to set title of the page
    document.title = "MANAGE BOOKS";

  // const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  // const [categoryName, setCategoryName] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('string');
  const[categoryId, setCategoryId] = useState(0);
  const[authorId, setAuthorId] = useState(0);

  const[categories, setCategories] = useState([]);

    // State to hold the selected category
    const [selectedCategory, setSelectedCategory] = useState('');


  useEffect(() => {
    getCategoryDetails();

  }, [])

  // Handler function when a category is selected
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

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

  const getCategoryDetails = async() =>{
    // e.preventDefault();
    try{
      const data = await getAllCategories();
      console.log(JSON.stringify(data));
      setCategories(data || []);
    }catch(error){
      handleError(error);
    }
  }


  const addBookDetails = async (e) => {
    e.preventDefault();
    console.log(selectedCategory)
    
    const book = {
      title : bookName,
      categoryId,
      categoryName : selectedCategory,
      authorId,
      authorName,
      quantityAvailable : quantity,
      description,
    }

    console.log(book)
    
    try{
      const result = await addBook(book);
  
      console.log(JSON.stringify(result))

      toast.success(result.message);

    }catch(error){
      handleError(error);
    }
    
  }

  const[bookDetail, setBookdetail] = useState([]);

    const loadBooks = async () => {

      try{
        const allBooks = await getAllBooks();
        
        console.log(JSON.stringify(allBooks))
  
        setBookdetail(allBooks)

      }catch(error){
        handleError(error);
      }
  }

  return (
<div className="container">
  <div className="row">
    <div className="col-md-5">
      <div className="content p-4 w-100">
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
          <div>
              <label htmlFor="category-select">Choose a category:</label>
              <select 
                id="category-select" 
                className="form-select"
                value={selectedCategory} 
                onChange={handleCategoryChange}
              >
                <option value="">--Select a Category--</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>

              {/* {selectedCategory && (
                <div className="mt-3">
                  <strong>Selected Category:</strong> {selectedCategory}
                </div>
              )} */}
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
    </div>

    <div className="col-md-7">
      <div className="content p-4 w-100">
        <div className="header d-flex justify-content-between align-items-center mb-4">
          <h4>Manage Books</h4>
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
</div>

         
  );
};

export default ManageBooks;
