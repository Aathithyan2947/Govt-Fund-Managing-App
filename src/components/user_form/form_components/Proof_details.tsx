import React from 'react'

function Proof_details({FormData,setFormData}:any) {
  return (
    <>
        <div className="input-group mb-2">
            <label className="mb-2 ms-3" htmlFor="identity proof">Identity Proof</label>
            <select className="ms-3 me-3 form-control w-100" name="identity proof" id="identity proof"
              value={FormData.identity}
              onChange={(e)=>setFormData({...FormData,identity:e.target.value})}
            >
              <option value="Select an Option">Select an Option</option>
              <option value="Passport">Passport</option>
              <option value="Aadhaar Card">Aadhaar Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Photo Credit Card">Photo Credit Card</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <div className="input-group mt-2 ms-3 me-3 mb-3">
            <label className="mb-2" htmlFor="Aadhaar">Aadhar Number</label>
            <input type="text" className="form-control me-4" placeholder="Enter the Aadhar Number" 
              value={FormData.aadhaar}
              onChange={(e)=>setFormData({...FormData,aadhaar:e.target.value})}
            />
        </div>
    </>
  )
}

export default Proof_details