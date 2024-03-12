import React from 'react'

function Address_details({FormData,setFormData}:any) {
  return (
    <>
      <div className="input-group mb-3">
            <label className="mb-2 ms-3" htmlFor="Nature of Document for Address">Nature of Document for Address</label>
            <select className="ms-3 me-3 form-control w-100" name="Nature of Document for Address" id="Nature of Document for Address"
              value={FormData.document}
              onChange={(e)=>setFormData({...FormData,document:e.target.value})}
            >
              <option value="Select an Option">Select an Option</option>
              <option value="Passport">Passport</option>
              <option value="Aadhaar Card">Aadhaar Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Photo Credit Card">Photo Credit Card</option>
              <option value="Pensioner's Card with Address">Pensioner's Card with Address</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <div className="input-group mb-3 ms-2">
            <label className="mb-2" htmlFor="myFile">Choose a Photo</label>
            <input type="file" className="ms-2 form-control me-4" 

            />
        </div>
        <div className="input-group ms-3 me-3 mb-2">
            <label className="mb-2" htmlFor="Address">Address</label>
            <input type="text" className="form-control me-4" placeholder="Enter the Address" 
              value={FormData.address}
              onChange={(e)=>setFormData({...FormData,address:e.target.value})}
            />
        </div>
        <div className="input-group ms-3 me-3 mb-2">
            <label className="mb-2" htmlFor="State/UT">State/UT</label>
            <input type="text" className="form-control me-4" placeholder="Enter the State" 
              value={FormData.state}
              onChange={(e)=>setFormData({...FormData,state:e.target.value})}
            />
        </div>
        <div className="input-group ms-3 me-3 mb-2">
            <label className="mb-2" htmlFor="Address">District</label>
            <input type="text" className="form-control me-4" placeholder="Enter the District" 
              value={FormData.district}
              onChange={(e)=>setFormData({...FormData,district:e.target.value})}
            />
        </div>
        <div className="input-group ms-3 me-3 mb-2">
            <label className="mb-2" htmlFor="Pincode">Pincode</label>
            <input type="text" className="form-control me-4" placeholder="Enter the Pincode" 
              value={FormData.pincode}
              onChange={(e)=>setFormData({...FormData,pincode:e.target.value})}
            />
        </div>
    </>
  )
}

export default Address_details