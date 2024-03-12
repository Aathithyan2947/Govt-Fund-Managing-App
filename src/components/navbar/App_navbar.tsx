import { Link } from 'react-router-dom';
import './App_navbar.css'
import Login_change from './Login_component/Login_change';

const App_navbar = () => {
    const temp=localStorage.getItem("currentUserDetails");
    const user=JSON.parse(temp!);
  return (
    <>
      <nav className="navbar bg-light navbar-expand-lg me-5 bg-transparent">
        <div className="container-fluid">
            <a className="mt-3 navbar-brand" href="#">
                {/*Navbar image*/}
            <img 
                src="src\assets\Tamil_Nadu_Emblem.png"
                style={{height:80,width:80}}
            />
            </a>
            <h5 className='mt-3 p-2'>Tamil Nadu <br/>Unique Disability <br />Schemes</h5>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu Bar</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 mt-3 pe-3">
                <li className="nav-item mx-3">
                    <Link to='/' className='nav-link active'>Home</Link>
                </li>
                <li className="nav-item mx-3">
                <Link to='/info_table' className='nav-link active'>Schemes</Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link active" aria-current="page" to='/aboutus'>About Us</Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link active" aria-current="page" to='/contactus'>Contact Us</Link>
                </li>
                </ul>
                {/* login and signup button */}
                {
                    user?<Login_change />:<div className='mt-3 d-flex justify-content-center align-items-center gap-3'>
                    <Link className='login-btn text-white text-decoration-none px-3 py-1 rounded-4' style={{backgroundColor:'green'}}
                    to='/Login'>Login</Link>
                    <Link
                    to='/signup' className='sign-btn text-white text-decoration-none px-3 py-1 rounded-4' style={{backgroundColor:'#eba834'}}
                    >Sign up</Link>
                </div>
                }
            </div>
            </div>
        </div>
        </nav>
    </>
  );
}

export default App_navbar;

