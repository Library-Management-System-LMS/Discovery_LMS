// import <LMS_logo className="jpg"></LMS_logo>
// import { Link } from "react-router-dom";
// import {MyLogo, MyNavbar} from "./pageService";
// import logo from "../images/LMS_logo.jpg"

function Test() {
    //to set title of the page
    document.title = "TEST";
  return (
    <div class="container">
   <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item me-3 me-lg-0 dropdown">
        <a
          data-mdb-dropdown-init
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          aria-expanded="false"
        >
          <i class="fas fa-user"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>

        
      </li>
</ul>   




</div>
  );
}



export default Test;
