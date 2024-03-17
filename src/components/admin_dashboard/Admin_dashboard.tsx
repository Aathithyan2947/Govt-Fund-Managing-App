import  { useEffect, useState } from 'react'
import './Admin_dashboard.css'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
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
  const [cus_id,setcusId] = useState({
    cus_id:'',
  });
  const [rejectCount , setRejectCount] =useState(0);
  const [reject,setReject]=useState(0);
  const [accept,setAccept]=useState(0);
  const [acceptCounter , setAcceptCount] =useState(0);
  const [totalAmt,setTotalAmt] = useState(100000);
  const deleteDocs = async (id:string)=>{
    setcusId({cus_id:id})
    debugger
      await addDoc(collection(db,'Admin/nSvYTlWuDVVqzTrlYie1/Rejected_Forms/'),cus_id).then(async()=>{
        const data = doc(db,"Users",id);
        console.log(id);
        await deleteDoc(data).then(()=>{
          alert('deleted successfully');
          setReject(()=>reject+1)
        });
  }).catch((err)=>{
    console.log(err);
  })
}
    const formCollectionRef = collection(db,"Users");
    const getForms = async ()=>{
      try{
          const snap = await getDocs(formCollectionRef);
          const filteredData = snap.docs.map((doc)=>{
              const data =doc.data()
              return {
                  id:data.id,
                  username:data.username,
                  disability_type:data.disability_type,
                  disability_due:data.disability_due,
                  disability_percent:data.disability_percent
              }
          },{});
          setFormsList(filteredData);
          setTotal(filteredData.length);
      }
      catch(err){
          console.log(err)
      }
  }
  const countReject = async ()=>{
    const query = collection(db,"Admin/nSvYTlWuDVVqzTrlYie1/Rejected_Forms/");
    const snapshot = await getDocs(query);
    setRejectCount(snapshot.size);
  }
  const acceptDocs =async (id : string)=>{
    setcusId({cus_id: id})
    await addDoc(collection(db,'Admin/nSvYTlWuDVVqzTrlYie1/Accepted_Forms/'),cus_id).then(async()=>{
      const data = doc(db,"Users",id);
        console.log(id);
        await deleteDoc(data).then(()=>{
          alert('The Form is accepted successfully');
          setReject(()=>reject+1);
          setTotalAmt(()=>totalAmt-10000);
        });
    });
  }
  const acceptCount = async ()=>{
    const query = collection(db,"Admin/nSvYTlWuDVVqzTrlYie1/Accepted_Forms/");
    const snapshot = await getDocs(query);
    setAccept(snapshot.size);
    setAcceptCount(()=>acceptCounter+1)
  }
    useEffect(()=>{
        getForms().then(()=>{
            setTimeout(()=>{
              setLoading(false);
            },2000)
        });
      countReject();
      acceptCount();
    },[reject,rejectCount,acceptCounter,totalAmt])
  return (
    <>
      {
        loading?<div className="loader">
        <div className="loader-inner">
          {[...Array(5)].map((_, index) => (
            <div className="loader-line-wrap" key={index}>
              <div className="loader-line"></div>
            </div>
          ))}
        </div>
      </div>:<>
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
                <h4 className='mt-3 text-white result_value text-center'>{accept}</h4>
              </div> 
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\cross-button.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">No.of Forms Rejected</h4>
                <h4 className='mt-3 text-white result_value text-center'>{rejectCount}</h4>
              </div> 
              <div className='Statcard d-flex flex-column justify-content-center'>
                <div className='d-flex flex-row justify-content-center'>
                  <img className="cardIcon" src="src\assets\rupee.png" alt="" />
                </div>
                <h4 className="text-white text-center mt-3">Total Amount Available</h4>
                <h4 className='mt-3 text-white result_value text-center'>{totalAmt}</h4>
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
                                          <button className='btn btn-success me-3' onClick={()=>{
                                            acceptDocs(val.id);
                                          }}>Accept</button>
                                          <button className='btn btn-danger' onClick={()=>{
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

function getCollectionCount(collectionPath: string) {
  throw new Error('Function not implemented.');
}
