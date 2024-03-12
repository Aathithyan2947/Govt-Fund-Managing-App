import { Route, Routes } from "react-router-dom"
import Home_app from "./components/home/home"
import Info_table from "./components/info_table/info_table"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import AboutUs from "./components/about_us/about_us"
import ContactUs from "./components/contact_us/contact_us"
import UserForm from "./components/user_form/UserForm"
import Admin_dashboard from "./components/admin_dashboard/Admin_dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home_app/>}/>
        <Route path='/info_table' element={<Info_table/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/form' element={<UserForm/>}></Route>
        <Route path='/admin' element={<Admin_dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
