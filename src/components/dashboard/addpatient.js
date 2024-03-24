import React, { useState, useContext, useEffect } from 'react';
import { firestore } from '../firebase'
import '../../assets/css/patient.css'

const AddPatient = () => {

  const [name, setName] = useState(''); 
  const [dob, setDob] = useState(); 
  const [phoneNo, setPhoneNo] = useState(); 
  const [email, setEmail] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [address, setAddress] = useState(''); 
  const [medicalhistory, setMedicalHistory] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    const options ={
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name, dob, phoneNo, email, gender, address, medicalhistory
      })
    }
    const res = fetch('https://hmsportal-a4d86-default-rtdb.firebaseio.com/PatientData.json',
    options)
    if(res)
    {
      alert("Patient Added!")
    }
    else{
      alert("Error Occured!")
    }

  };

  return (
    <div className="patient-outer container">
      <form className='form-patient' method='POST'>
        <div>
        <h1 className='heading-patient'>Add a Patient</h1>


        <div className='row'>
          <div className='col-sm-6'>
            <label htmlFor='fullname'> Full Name : </label>
            <input
              type='string'
              name='Name'
              placeholder='Enter Full Name'
              value={name} required autoComplete='off'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label htmlFor='gender'> Gender : </label>
            <input
              type='string'
              name='Gender'
              placeholder='Enter Gender'
              value={gender} required autoComplete='off'
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>  


        <div className='row'>
          <div className='col-sm-6'>
            <label htmlFor='phoneNo'> Phone No : </label>
            <input
              type='tel'
              name='PhoneNo'
              placeholder='Enter Phone No' minLength={10} maxLength={10}
              value={phoneNo} required autoComplete='off'
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label htmlFor='email'> Email : </label>
            <input
              type='email'
              name='email'
              placeholder='Enter email'
              value={email} required autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>  

        <div className='row'>
        <div className='col-sm-6'>
            <label htmlFor='dob'> Date of Birth : </label>
            <input
              type='date'
              name='dob'
              placeholder='Enter Date of Birth'
              value={dob} required autoComplete='off'
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className='col-sm-6'>
            <label htmlFor='address'> Address : </label>
            <input
              type='string'
              name='Address'
              placeholder='Enter Address'
              value={address} required autoComplete='off'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>  

        <div className='row'>
          <div className='col-sm-12'>
          <label htmlFor='medicalhistory'> Any Medical History/Allergies? </label>
            <textarea placeholder='Any Medical History/Allergies?' style={{height:'100px'}} value={medicalhistory} onChange={(e) => setMedicalHistory(e.target.value)}></textarea>
          </div>
        </div>

        <br></br>
        <div className='row'>
          <input type='submit' value='ADD' className='btn-sbmt' onClick={onSubmit} />
        </div>

        </div>

        <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
      </form>
    </div>
  )
};

export default AddPatient;
