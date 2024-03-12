import { useState } from 'react';
import App_navbar from '../navbar/App_navbar'
import './UserForm.css'
import Personal_details from './form_components/personal_details';
import Proof_details from './form_components/Proof_details';
import Address_details from './form_components/Address_details';
import Disabled_details from './form_components/Disabled_details';
import Personal_details_Extra from './form_components/Personal_details_Extra';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../config/firebase-config';
import {useNavigate} from 'react-router-dom'

function UserForm() {
  const navigate=useNavigate();
  const [page,setPage]=useState(0);
  const FormTitles =[
    "Personal Details","Personal Details","Proof of Identity Card","Address for Correspondence",
    "Disability Details"
  ];

  const [FormData,setFormData]=useState({
    id:'',
    username:'',
    fathername:'',
    mothername:'',
    dob:'',
    category:'',
    bloodGroup:'',
    guardian:'',
    phone:'',
    aadhaar:'',
    address:'',
    document:'',
    state:'',
    pincode:'',
    disability_type:'',
    disability_due:'',
    disability_percent:''
  });

  const readData = ()=>{
    let msg : string ='';
    for(var key in FormData){
      msg=FormData[key as keyof typeof FormData];
      const ansutterance = new SpeechSynthesisUtterance(msg);
      const keyutterance =new SpeechSynthesisUtterance(key);
      ansutterance.rate=1;
      ansutterance.pitch=1;
      ansutterance.volume=1;
      speechSynthesis.speak(keyutterance);
      speechSynthesis.speak(ansutterance);
    }
  };

  const formsubmit = async()=>{
    const currentUser = String(auth.currentUser?.uid)
    FormData.id=currentUser;
    try{
      await setDoc(doc(db, "Users",currentUser),FormData).then(()=>{
        FormData.username='',
          FormData.fathername='',
          FormData.mothername='',
          FormData.dob='',
          FormData.category='',
          FormData.bloodGroup='',
          FormData.guardian='',
          FormData.phone='',
          FormData.aadhaar='',
          FormData.address='',
          FormData.document='',
          FormData.state='',
          FormData.pincode='',
          FormData.disability_type='',
          FormData.disability_due='',
          FormData.disability_percent=''
      }).then(()=>{
        alert("Added Successfully");
        navigate('/')
      })
    }catch(err){
      console.log(err)
    }
  }

  const PageDisplay =()=>{
    if (page===0){
      return <Personal_details FormData={FormData} setFormData={setFormData}/>
    }
    else if(page==1){
      return <Personal_details_Extra FormData={FormData} setFormData={setFormData}/>
    }
    else if(page===2){
      return <Proof_details FormData={FormData} setFormData={setFormData}/>
    }
    else if(page===3){
      return <Address_details FormData={FormData} setFormData={setFormData}/>
    }
    else{
      return <Disabled_details FormData={FormData} setFormData={setFormData}/>
    }
  } 
  return (
    <>
    <div className='form-back'>
      <App_navbar></App_navbar>
      <div className='form-back d-flex flex-column justify-content-center'>
        <div className='form'> 
          <div className='progressbar'></div>
            <div className='d-flex flex-row justify-content-center'>
            <div className='form-Container'>
              <div className='header'>
                <h2 className='text-center mt-2'>{FormTitles[page]}</h2>
              </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer d-flex flex-row justify-content-center mb-3'>
                    <button disabled={page===0} 
                      className='btn btn-warning me-3 text-white' onClick={()=>
                      {setPage((curPage)=>curPage-1)}}>Prev</button>
                    {
                      page===FormTitles.length-1?<button
                      className='btn btn-warning ms-3 text-white'
                      onClick={()=>formsubmit()}
                    >Submit</button>:<button  disabled={page===FormTitles.length-1}
                    className='btn btn-warning ms-3 text-white'
                    onClick={()=>
                      {setPage((curPage)=>curPage+1)}}
                  >Next</button> 
                    }{
                      page===FormTitles.length-1?<button  
                        className='btn btn-warning ms-4 text-white'
                        onClick={readData}
                      >Read Data</button> :<></>
                    }
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default UserForm