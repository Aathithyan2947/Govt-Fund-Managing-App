import { useState } from 'react'
import App_navbar from '../navbar/App_navbar'
import SignUpformInput from './SignComponents/SignUpformInput'
import './signup.css'
import {useNavigate} from 'react-router-dom'
import {auth} from '../config/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

type SignUpformValues ={
    username:string,
    email:string,
    password:string,
    confirmPassword:string
}
type SignUpInputsValue = { 
    id:number,
    name:keyof SignUpformValues,
    errorMessage:string,
    type:string,
    placeholder:string,
    pattern:string,
    required:boolean
}
function Signup() {
    const navigate=useNavigate();
    const [values,setValues]=useState<SignUpformValues>({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupInputs : SignUpInputsValue[] =[
        {
            id:1,
            name:'username',
            type:'text',
            errorMessage:'Username should be 3-16 characters',
            placeholder:'Username',
            pattern:'^[A-Za-z0-9]{3,16}$',
            required:true
        },
        {
            id:2,
            name:'email',
            errorMessage:'Invalid Email Address',
            type:'email',
            placeholder:'Email',
            pattern:'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,30}$',
            required:true,
        },
        {
            id:3,
            name:'password',
            errorMessage:'Password must consists of numbers,characters and Special character',
            type:'password',
            placeholder:'Password',
            pattern:'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$',
            required:true,
        },
        {
            id:4,
            name:'confirmPassword',
            errorMessage:'Password Does not match',
            type:'password',
            placeholder:'Confirm Password',
            pattern:values.password,
            required:true,
        },
    ]

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const signupdb =async()=>{
            await createUserWithEmailAndPassword(auth,values.email,values.password)
            .then(()=>{
                values.username='';
                values.email='';
                values.password='';
                values.confirmPassword='';
                alert('Registered Successfully');
                navigate('/login');
            })
        }
        signupdb();
    }
    const onChange = (e:any)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
  return (
    <>
    <App_navbar />
        <div className='d-flex flex-row'>
            <div className='signup-img'></div>
            <div className='second-side d-flex flex-column justify-content-center align-items-center'>
            <div className ="loginContainer p-5">
            <form onSubmit={handleSubmit}>
                <div className="userpass">
                    <h2 className='text-center mb-4'>Sign up</h2>
                    {
                        signupInputs.map((val,key)=>{
                            return(
                                <SignUpformInput key={key} {...val} value={values[val.name]} onChange={onChange}/>
                            )
                        })
                    }
                    <div className="but text-center mt-4">
                        <button type="submit" className="btn btn-warning text-white" >Sign up</button>
                    </div>
                </div> 
            </form>
            </div>
            </div>
        </div>
    </>
  )
}

export default Signup