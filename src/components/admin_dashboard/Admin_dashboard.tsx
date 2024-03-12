import  { useEffect, useState } from 'react'
import './Admin_dashboard.css'
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase-config';

type Data = {
  id:string,
  username : string,
  disability_type : string,
  disability_due:string,
  disability_percent:string,
}[]

function Admin_dashboard() {
  const [FormsList,setFormsList]=useState<Data>([]);
  const [loading,setLoading]=useState(true);
  const [total,setTotal]=useState(0);
  const [reject,setReject]=useState(0);
  const deleteDocs = async (id:string)=>{
    console.log(id);
    const data = doc(db,"Users",id);
    // await setDoc(doc(db,"Admin",""),FormsList)
}
    const formCollectionRef = collection(db,"Users");
    useEffect(()=>{
        const getForms = async ()=>{
            try{
                const snap = await getDocs(formCollectionRef);
                const filteredData = snap.docs.map((doc)=>{
                    const data =doc.data();
                    return {
                        id:data.id,
                        username:data.username,
                        disability_type:data.disability_type,
                        disability_due:data.disability_due,
                        disability_percent:data.disability_percent
                    }
                });
                setFormsList(filteredData);
                setTotal(FormsList.length);
                setLoading(false);
                console.log(total)
            }
            catch(err){
                console.log(err)
            }
        }
        getForms();
    },[])
  return (
    <>
      {
        loading?("Loading Data ...."):<>
        <div className='adminBackground'> 
          <div className='title_head text-center text-black'>
            <h1>Hi Admin !</h1>
          </div>
        <div className='d-flex flex-row justify-content-evenly'>
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\people_icon.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">Total No.of Forms</h4>
                <h4 className='mt-3 text-white result_value text-center'>{total}</h4>
              </div> 
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\accept-circular-button-outline.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">No.of Forms Accepted</h4>
                <h4 className='mt-3 text-white result_value text-center'>{30}</h4>
              </div> 
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\cross-button.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">No.of Forms Rejected</h4>
                <h4 className='mt-3 text-white result_value text-center'>{reject}</h4>
              </div> 
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\rupee.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">Total Amount Available</h4>
                <h4 className='mt-3 text-white result_value text-center'>{100000}</h4>
              </div> 
            </div>
          {/* Admin table */}
          <div className='table-back ms-5 me-5 mt-5'>
              <table className='table'>
                  <thead>
                      <tr className='m-2 text-center'>
                          <th>Username</th>
                          <th>Disability Type</th>
                          <th>Disability Due</th>
                          <th>Disability Percentage</th>
                          <th>Suggestion Level</th>
                          <th>Approval</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          FormsList.map((val,id)=>{
                              return (
                                  <tr className='text-center' key={id}>
                                      <td>{val.username}</td>
                                      <td>{val.disability_type}</td>
                                      <td>{val.disability_due}</td>
                                      <td>{val.disability_percent}</td>
                                      <td>{
                                          <div>
                                              {
                                              Number(val.disability_percent)<50?<div className='btn btn-outlined-warning'>
                                                  Low
                                              </div>:<></>
                                              }
                                              {Number(val.disability_percent)>50 && Number(val.disability_percent)<70?
                                              <div className='btn btn-outlined-warning'>
                                                  Medium
                                              </div> :<></> 
                                          }
                                          {Number(val.disability_percent)>70?
                                              <div className='btn btn-outlined-warning'>
                                                  high
                                              </div> :<></>
                                          }
                                          </div>
                                          }</td>
                                      <td>
                                          <button className='btn btn-success me-3'>Accept</button>
                                          <button className='btn btn-danger' onClick={()=>{
                                               setReject(reject+1);
                                               deleteDocs(val.id);
                                          }}>Reject</button>
                                      </td>
                                  </tr>
                              );
                          })
                      }
                  </tbody>
              </table>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default Admin_dashboard