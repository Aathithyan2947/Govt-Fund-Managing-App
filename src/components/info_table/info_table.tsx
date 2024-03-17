import { Link } from 'react-router-dom';
import App_navbar from '../navbar/App_navbar';
import './info_table.css'
import { useState } from 'react';

function Info_table() {
  const [Search ,setSearch] = useState('');
    const data =[
        {state:'Chhattisgarh',disability:'Locomotor Disability',
        scheme:'Age Relaxation for Motorized Tricycle ADIP Scheme',
        benefit_criteria:'40%',
        type:'Misc Benefits'},
        {state:'Tamil Nadu',disability:'Autism Spectrum Disorder',
        scheme:'FREE SUPPLY OF CLOTHING ITEMS',
        benefit_criteria:'60%',
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
          <div className='mb-5 me-5 ms-5'>
            <input className='w-100 form-control ps-3' type="text" placeholder='Search by State Name'
              onChange={(e)=>{
                setSearch(e.target.value)
              }}
            />
          </div>
        <table className='table table-secondary'>
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
          {data.filter((item)=>{
            return Search.toLowerCase() === '' ? item :
            item.state.toLowerCase().includes(Search)
          }).map((val, key) => {
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