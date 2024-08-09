// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Navbar, MyFooter} from './components/pageService';
// import axios from 'axios';
import LoginUser from './pages/login';  
import RegisterUser from './pages/register';
import Home from './pages/home';
import AboutPage from './pages/about';
import ManageBooks from './pages/manageBook';
import ReturnBook from './pages/returnBook';
import Test from './pages/test';
import ViewRecords from './pages/viewRecords';
import DefaulterList from './pages/defaulterList';
import ManageUsers from './pages/manageUser';
import ViewIssuedBook from './pages/viewIssuedBook';
import { Link } from 'react-router-dom';  
import Layout from './components/layout';
import IssueBook from './pages/issueBook';

function App() {
  return (
    
    <div className="App">

      <Layout />
      
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/home' element={<Home />} />
        <Route path='/return' element={<ReturnBook/>}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/manageuser' element={<ManageUsers />} />
        <Route path='/managebook' element={<ManageBooks />} />
        <Route path='/test' element={<Test />} />
        <Route path='/viewrecords' element={<ViewRecords />} />
        <Route path='/defaulter' element={<DefaulterList/>}/>
        <Route path='/viewbook' element={<ViewIssuedBook/>}/>
        <Route path='/issuebook' element={<IssueBook/>}/>
      </Routes>
      

      <MyFooter/>
    </div>
  );
}

export default App;
