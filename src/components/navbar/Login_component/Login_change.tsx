import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

function Login_change() {
    const navigate=useNavigate();
    const temp=localStorage.getItem("currentUserDetails");
    const curuser=JSON.parse(temp!);

    const logout = async()=>{
      try{
        await signOut(auth).then(()=>
        {
          localStorage.removeItem('currentUserDetails');
          navigate('/login')
        });
      }
      catch(err){
        console.error(err);
      }
    }
  return (
    <div className="d-flex flex-row justify-content-evenly">
    <div className='mt-3 userProfileLogo gap-3'>
            <h4 className="mt-2">{curuser.email[0].toUpperCase()}</h4>
        </div>
        <h5 onClick={logout} className="mt-4 ms-4"> Logout</h5>
    </div>
  )
}

export default Login_change