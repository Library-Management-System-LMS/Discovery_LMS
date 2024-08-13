import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import BorrowBook from './pages/borrowBook';
import UserProfile from './pages/userprofile';
import UpdatePassword from './pages/updatepassword';
import { MyFooter, NavbarAfterLogIn, NavbarBeforeLogin } from './components/navbar';


function App() {
  const user = useSelector((state) => state.user)

  return (
    
    <div className="App">
      { user.isLoggedIn ? <NavbarAfterLogIn/> : <NavbarBeforeLogin/>}
      
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
        <Route path='/borrow' element={<BorrowBook/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/updatepassword' element={<UpdatePassword/>}/>

      </Routes>
      

      <MyFooter/>
      <ToastContainer />
    </div>
  );
}

export default App;
