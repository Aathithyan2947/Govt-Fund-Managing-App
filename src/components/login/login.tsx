import { useState } from 'react'
import App_navbar from '../navbar/App_navbar'
import FormInput from './form_components/FormInput'
import './login.css'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,googleProvider } from '../config/firebase-config';
import {  useNavigate } from 'react-router-dom';

type LoginformValues ={
    username:string,
    password:string
}
type LogininputsValue = { 
    id:number,
    name:keyof LoginformValues,
    errorMessage:string,
    type:string,
    placeholder:string,
    pattern:string,
    required:boolean
}
function Login() {    
    const navigation=useNavigate();
    const [values,setValues]=useState<LoginformValues>({
        username:'',
        password:''
    });

    const inputs : LogininputsValue[]=[
        {
            id:1,
            name:'username',
            type:'text',
            errorMessage:'Invalid Email Address',
            placeholder:'Email',
            pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,30}$',
            required:true
        },
        {
            id:2,
            name:'password',
            errorMessage:'Password must consists of numbers,characters and Special character',
            type:'password',
            placeholder:'Password',
            pattern:'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$',
            required:true,
        },
    ]
    const handleSubmit =(e:any)=>{
        e.preventDefault();
    }
    const signInWithEmail =()=>{
        signInWithEmailAndPassword(auth,values.username,values.password).then(()=>{
           const CurrentUserDetails={
               Userid:auth.currentUser?.uid,
               email:auth.currentUser?.email
           }
           localStorage.setItem('currentUserDetails',JSON.stringify(CurrentUserDetails));
           navigation('/');
        }).catch(()=>{
            values.username='';
            values.password='';
            alert("Invalid Credentials");
        });
   }
    const onChange = (e:any)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    const signInWithGoogle=async()=>{
        await signInWithPopup(auth,googleProvider).then(()=>{
            const CurrentUserDetails={
                Userid:auth.currentUser?.uid,
                email:auth.currentUser?.email
            }
            alert('Logged In Succesfully');
            localStorage.setItem('currentUserDetails',JSON.stringify(CurrentUserDetails));
            navigation('/');
        });
    }
  return (
    <>
    <App_navbar />
        <div className='d-flex flex-row'>
            <div className='background-img'></div>
            <div className='second-side d-flex flex-column justify-content-center align-items-center'>
            <div className ="loginContainer p-5">
            <form onSubmit={handleSubmit}>
                <div className="userpass">
                    <h2 className='text-center mb-4'>Login</h2>
                    {
                     inputs.map((val,key)=>{
                        return (
                            <FormInput key={key} {...val} value={values[val.name]} onChange={onChange}/>  
                        );
                     })
                    }
                    <div className="text-center mt-4">
                        <button onClick={signInWithEmail} type='submit' className="Login-button btn btn-warning text-white">Login</button>
                    </div>
                </div> 
            </form>
                <div className='d-flex flex-row justify-content-center mt-2'>
                        <div onClick={signInWithGoogle} className='p-2 mt-1 btn google-button text-white d-flex flex-row justify-content-evenly'>
                            <img style={{height:'20px'}} src='src/assets/google.png' alt="" />
                            <p className='pt-2 d-flex flex-column justify-content-center'>Sign in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login