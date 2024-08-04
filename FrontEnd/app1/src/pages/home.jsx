import React from 'react';
import Layout from '../components/layout';

const Home = () => {
  //to set title of the page
  document.title = "HOME";


  return (
    <div class="container">
      
      <div class="row text-center mb-4">
      <div class="col-md-3 counter bg-white p-4 shadow-sm rounded">
        <h3>No. of Books</h3>
        <p>4</p>
      </div>
      <div class="col-md-3 counter bg-white p-4 shadow-sm rounded">
        <h3>No. of Users</h3>
        <p>6</p>
      </div>
      <div class="col-md-3 counter bg-white p-4 shadow-sm rounded">
        <h3>Issued Books</h3>
        <p>2</p>
      </div>
      <div class="col-md-3 counter bg-white p-4 shadow-sm rounded">
        <h3>Defaulter List</h3>
        <p>1</p>
      </div>
    </div>
  
    <div class="row">
      <div class="col-md-6 mb-4">
        <h3>User Details</h3>
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sunil</td>
              <td>sunil@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mangesh</td>
              <td>mangesh@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Deepak</td>
              <td>deepak@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rahul</td>
              <td>rahul@example.com</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Praful</td>
              <td>praful@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6 mb-4">
        <h3>Book Details</h3>
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Book ID</th>
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
              <td>Core Java Volume I</td>
              <td>Cay S. Horstmann</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  
    </div>
  );
}

export default Home;
