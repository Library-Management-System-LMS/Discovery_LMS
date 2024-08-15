import React from 'react';
import './home.css'; // Import the CSS file for styling
import Book01 from '../images/Book01.jpg';
import Book02 from '../images/Book02.jpg';
import Book03 from '../images/Book03.jpg';
import Book04 from '../images/Book04.jpg';
import userProfile from '../images/userProfile.jpg';
import Cart from '../images/Cart.jpg';

function Home () {
  document.title = "Home";

  return (
    <div className="home-container">
      <aside className="sidebar">
        {/* You can add other sidebar content here */}
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h2>My Books</h2>
          {/* <div className="search-bar">
            <input type="text" placeholder="Start Searching..." />
          </div>

          <div className="user-profile">
            <img src={userProfile} alt="User Profile" />
          </div>

          <div className="Cart">
            <button><img src={Cart} alt="Cart" /></button>
            
          </div> */}
        </header>

        <div className="books-section">

          <div className="book-category">
            <h3>Category Name</h3> 
            <div className="book-list">
              <div className="book-item">
                <img src={Book01} alt="Harry Potter book cover" />
                <p>Harry Potter</p>
                <span>by J.K. Rowling</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book02} alt="The Past is Rising book cover" />
                <p>The Past is Rising</p>
                <span>by Kathryn Bywaters</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book03} alt="The Last Four Things book cover" />
                <p>The Last Four Things</p>
                <span>by Paul Hoffman</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book04} alt="Other London book cover" />
                <p>Other London</p>
                <span>by M.V. Stott</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book04} alt="Other London book cover" />
                <p>Other London</p>
                <span>by M.V. Stott</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book04} alt="Other London book cover" />
                <p>Other London</p>
                <span>by M.V. Stott</span>
                <button className="add-to-cart-button">View</button>
              </div>
            </div>
          </div>

          <div className="book-category">
            <h3>Comedy</h3> 
            <div className="book-list">
              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              <div className="book-item">
                <img src={Book01} alt="Comedy Book Cover" />
                <p>Comedy Book Title</p>
                <span>by Author Name</span>
                <button className="add-to-cart-button">View</button>
              </div>

              
            </div>
          </div>

          {/* Repeat the book-category structure for other categories */}
        </div>
      </main>
    </div>
  );
};

export default Home;
