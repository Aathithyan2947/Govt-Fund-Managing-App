function Disabled_details({FormData,setFormData}:any) {
  return (
    <>
      <div className="input-group mb-2">
            <label className="mb-2 ms-3" htmlFor="Disability Type">Disability Type</label>
            <select className="ms-3 me-3 form-control w-100" name="Disability Type" id="Disability Type"
            value={FormData.disability_type}
            onChange={(e)=>setFormData({...FormData,disability_type:e.target.value})}
            >
              <option value="Select an Option">Select an Option</option>
              <option value="Acid Attack Victim">Acid Attack Victim</option>
              <option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
              <option value="Blindness">Blindness</option>
              <option value="Cerebral Palsy">Cerebral Palsy</option>
              <option value="Chronic Neurological Conditions">Chronic Neurological Conditions</option>
              <option value="Hearing Impairment">Hearing Impairment</option>
              <option value="Hemophilia">Hemophilia</option>
              <option value="Intellectual Disability">Intellectual Disability</option>
              <option value="Leprosy cured">Leprosy cured</option>
              <option value="Locomotor Disability">Locomotor Disability</option>
              <option value="Low Vision">Low Vision</option>
              <option value="Mental Illness">Mental Illness</option>
            </select>
        </div>
        <div className="input-group mb-2">
            <label className="mb-2 ms-3" htmlFor="Disability Due to">Disability Type</label>
            <select className="ms-3 me-3 form-control w-100" name="Disability Due to" id="Disability Due to"
              value={FormData.disability_due}
              onChange={(e)=>setFormData({...FormData,disability_due:e.target.value})}
            >
              <option value="Select an Option">Select an Option</option>
              <option value="Accident">Accident</option>
              <option value="Congenital">Congenital</option>
              <option value="Diseases">Diseases</option>
              <option value="Hereditary">Hereditary</option>
              <option value="Infection">Infection</option>
              <option value="Medicine">Medicine</option>
            </select>
        </div>
        <div className="input-group mt-2 ms-3 me-3 mb-3">
            <label className="mb-2" htmlFor="Disability Percentage">Disability Percentage (%)</label>
            <input type="text" className="form-control me-4" placeholder="Disability Percentage" 
              value={FormData.disability_percent}
              onChange={(e)=>setFormData({...FormData,disability_percent:e.target.value})}
            />
        </div>
    </>
  )
}

export default Disabled_details