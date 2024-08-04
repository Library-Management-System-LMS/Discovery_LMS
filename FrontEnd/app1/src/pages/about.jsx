import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container">

      <body>
        <h1 className="display-4 mt-4">About Us</h1>
        <p></p>
        <p className="lead">Our goal is to streamline library operations and provide a seamless experience for both librarians and users. Whether you are managing a small community library or a large academic library, our system is flexible and scalable to meet your needs.
        </p>

        <p className="lead">
            Our Library Management System allows you to:
          </p>
          <ul className="lead">
            <li>Track and manage your book inventory with ease.</li>
            <li>Keep records of borrowers and their borrowing history.</li>
            <li>Search for books quickly and accurately.</li>
            <li>Generate reports on library usage and book circulation.</li>
            <li>Manage user accounts and their roles within the system.</li>
          </ul>
      </body>
    </div>
  );
}

export default AboutPage;