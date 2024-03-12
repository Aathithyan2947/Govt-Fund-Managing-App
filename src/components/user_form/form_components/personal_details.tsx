import '../UserForm.css'

function Personal_details({FormData,setFormData}:any) {
  return (
    <>
      <div className="p-3">
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="username">Applicant's Full Name</label>
            <input 
              type="text" className="form-control" placeholder="Username" 
              value={FormData.username}
              onChange={(e)=>setFormData({...FormData,username:e.target.value})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="FatherName">Applicant Father's Name</label>
            <input type="text" className="form-control" placeholder="Father name" 
              value={FormData.fathername}
              onChange={(e)=>setFormData({...FormData,fathername:e.target.value})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="MotherName">Applicant Mother's Name</label>
            <input type="text" className="form-control" placeholder="Mother name" 
              value={FormData.mothername}
              onChange={(e)=>setFormData({...FormData,mothername:e.target.value})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="BirthDate">Date of Birth</label>
            <input type="date" className="form-control" 
              value={FormData.dob}
              onChange={(e)=>setFormData({...FormData,dob:e.target.value})}
            />
        </div>
        <div className="input-group mb-3">
            <label className="mb-2" htmlFor="Category">Category</label>
            <select className="form-control w-100" name="Category" id="Category"
              value={FormData.category}
              onChange={(e)=>setFormData({...FormData,category:e.target.value})}
            >
              <option value="Select an Option">Select an Option</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="Others">Others</option>
            </select>
        </div>
      </div>
    </>
  )
}

export default Personal_details