import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '../UserForm.css'

function Personal_details_Extra({FormData,setFormData}:any) {
  return (
    <>
      <div className="p-3">
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="Blood Group">Blood Group</label>
            <select className="w-100 form-control" id="Blood Group"
              value={FormData.bloodGroup}
              onChange={(e)=>setFormData({...FormData,bloodGroup:e.target.value})}
            >
              <option value="Select an Option">Select an option</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="Guardian">Name of Guardian / Caretaker</label>
            <input type="text" className="form-control" placeholder="Name of Guardian / Caretaker" 
              value={FormData.guardian}
              onChange={(e)=>setFormData({...FormData,guardian:e.target.value})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="GuardianNo">Contact No. of Guardian / Caretaker</label>
            <PhoneInput 
              defaultCountry='in'
              className='w-100 PhNumber'
              value={FormData.phone}
              onChange={(phone)=>setFormData({...FormData,phone:phone})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="myFile">Choose a Photo</label>
            <input type="file" className="form-control" />
        </div>
      </div>
    </>
  )
}

export default Personal_details_Extra