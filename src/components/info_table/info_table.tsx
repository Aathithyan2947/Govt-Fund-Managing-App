import { Link } from 'react-router-dom';
import App_navbar from '../navbar/App_navbar';
import './info_table.css'

function Info_table() {
    const data =[
        {state:'Chhattisgarh',disability:'Locomotor Disability',
        scheme:'Age Relaxation for Motorized Tricycle ADIP Scheme',
        benefit_criteria:'40%',
        type:'Misc Benefits'},
        {state:'Kerala',disability:'Intellectual Disability',
        scheme:'Niramaya',
        benefit_criteria:'40%',
        type:'Financial Assistance'},
        {state:'Madhya Pradesh',disability:'Blindness',
        scheme:'Nishashkt Vivah',
        benefit_criteria:'60%',
        type:'Allowances'},
        {state:'Puducherry',disability:'Blindness, Cerebral Palsy, Chronic Neurological Conditions, Hearing Impairment, Locomotor Disability, Low Vision, SUPPLY OF PROSTHETIC APPLIANCES TO PwD',
        scheme:'SUPPLY OF PROSTHETIC APPLIANCES TO PwD',
        benefit_criteria:'40%',
        type:'Misc Benefits'},
        {state:'Puducherry',disability:	'Autism Spectrum Disorder, Blindness, Cerebral Palsy, Chronic Neurological Conditions, Hearing Impairment, Hemophilia, Intellectual Disability, Leprosy cured, Locomotor Disability, Low Vision, Mental Illness, , , Multiple Sclerosis, Muscular Dystrophy, Parkinsons Disease, Short Stature/Dwarfism, Sickle Cell Disease, Specific Learning Disabilities, Speech and Language Disability, Thalassemia',
        scheme:'FINANCIAL ASSISTANCE TO DIFFERENTLY ABLED PERSON',
        benefit_criteria:'40%',
        type:'Misc Benefits'},
        {state:'Puducherry',disability:	'	Acid Attack Victim, Autism Spectrum Disorder, Blindness, Cerebral Palsy, Chronic Neurological Conditions, Hearing Impairment, Hemophilia, Intellectual Disability, Leprosy cured, Locomotor Disability, Low Vision, Mental Illness, , , Multiple Sclerosis, Muscular Dystrophy, Parkinsons Disease, Short Stature/Dwarfism, Sickle Cell Disease, Specific Learning Disabilities, Speech and Language Disability, Thalassemia',
        scheme:'GRANT OF SCHOLARSHIP TO DIFFERENTLY ABLED STUDENTS',
        benefit_criteria:'40%',
        type:'Misc Benefits'},
        {state:'Puducherry',disability:	'Locomotor Disability',
        scheme:'	FUEL SUBSIDY TO DIFFERENTLY ABLED PERSONS',
        benefit_criteria:'40%',
        type:'	Subsidy'},
        {state:'Puducherry',disability:	'	Acid Attack Victim, Autism Spectrum Disorder, Blindness, Cerebral Palsy, Chronic Neurological Conditions, Hearing Impairment, Hemophilia, Intellectual Disability, Leprosy cured, Locomotor Disability, Low Vision, Mental Illness, , , Multiple Sclerosis, Muscular Dystrophy, Parkinsons Disease, Short Stature/Dwarfism, Sickle Cell Disease, Specific Learning Disabilities, Speech and Language Disability, Thalassemia',
        scheme:'	FREE SUPPLY OF CLOTHING ITEMS',
        benefit_criteria:'40%',
        type:'	Financial Assistance'},   
    ];
  return (
    <>
    <App_navbar />
    <h1 className='text-center mb-5'>Disability Schemes</h1>
        <div className='d-flex flex-row justify-content-evenly'>
          <div className='mb-5'>
          <label htmlFor="stateDropdown">state/UTs name</label>
          <select className='w-100 form-control' id="stateDropdown">
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
          </select>
          </div>
          <div >
          <label htmlFor="disabilityDropdown">Disability Type:</label>
          <select className='w-100 form-control' id="disabilityDropdown">
            <option value="Hearing Impairment">Hearing Impairment</option>
            <option value="Chochlear Implant Surgery under ADIP">Chochlear Implant Surgery under ADIP</option>
            <option value="Locomotor Disability">Locomotor Disability</option>
            <option value="Age Relaxation for Motorized Tricycle ADIP Scheme">Age Relaxation for Motorized Tricycle ADIP Scheme</option>
            <option value="Intellectual Disability">Intellectual Disability</option>
            <option value="Niramaya">Niramaya</option>
            <option value="Blindness">Blindness</option>
            <option value="Nishashkt Vivah">Nishashkt Vivah</option>
            <option value="Cerebral Palsy">Cerebral Palsy</option>
            <option value="Chronic Neurological Conditions">Chronic Neurological Conditions</option>
            <option value="Hearing Impairment">Hearing Impairment</option>
            <option value="Hemophilia">Hemophilia</option>
            <option value="Leprosy cured">Leprosy cured</option>
            <option value="Low Vision">Low Vision</option>
            <option value="SUPPLY OF PROSTHETIC APPLIANCES TO PwD">SUPPLY OF PROSTHETIC APPLIANCES TO PwD</option>
            <option value="Hemophilia">Hemophilia</option>
            <option value="Multiple Sclerosis">Multiple Sclerosis</option>
            <option value="Muscular Dystrophy">Muscular Dystrophy</option>
            <option value="Parkinson's Disease">Parkinson's Disease</option>
            <option value="Short Stature/Dwarfism">Short Stature/Dwarfism</option>
            <option value="Sickle Cell Disease">Sickle Cell Disease</option>
            <option value="Specific Learning Disabilities">Specific Learning Disabilities</option>
            <option value="Speech and Language Disability">Speech and Language Disability</option>
            <option value="ANNUAL TOUR FOR DIFFERENTLY ABLED PERSONS">ANNUAL TOUR FOR DIFFERENTLY ABLED PERSONS</option>
            <option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
          </select>
          </div>
          <div>
          <label htmlFor="SchemeType">Scheme Type:</label>
          <select className='w-100 form-control' id="SchemeType">
            <option value="Both">Both</option>
            <option value="Central">Central</option>
            <option value="State/UTs">State/UTs</option>
          </select>
          </div>
          
        </div>
        <table className='table table-secondary table-striped'>
          <thead>
            <tr className='table-dark'>
              <th>State/UTs Name</th>
              <th>Disability Type</th>
              <th>Scheme Name</th>
              <th>Disability Benefits Criteria</th>
              <th>Type of Benefits</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
          {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.state}</td>
                            <td>{val.disability}</td>
                            <td>{val.scheme}</td>
                            <td>{val.benefit_criteria}</td>
                            <td>{val.type}</td>
                            <td>
                              <Link className='btn btn-success' to='/form'>Apply</Link>
                            </td>
                        </tr>
                    )
                })}
          </tbody></table>
    </>
  )
}

export default Info_table