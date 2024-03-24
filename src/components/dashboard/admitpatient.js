import React, {useState, useEffect} from "react"
import {get, ref} from 'firebase/database'
import {database} from '../firebase'
import NavbarDashboard from "./navbar-dashboard";

const AdmitPatient = () => {

  const [patients, setPatients] = useState([]);
  const [id, setId] = useState(''); 
  const [room, setRoom] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    const options ={
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        id, room
      })
    }
    const res = fetch('https://hmsportal-a4d86-default-rtdb.firebaseio.com/PatientAdmitData.json',
    options)
    if(res)
    {
      alert("Patient Admitted!")
    }
    else{
      alert("Error Occured!")
    }

  };

  useEffect(()=>{
    const patientsRef = ref(database, "PatientData");
    get(patientsRef).then((snapshot) => {
      if(snapshot.exists()){
        const patientsArray = Object.entries(snapshot.val()).map(([id,data]) => ({
          id, ...data,
        }));
        setPatients(patientsArray);
        console.log(patients)
      }
      else{
        console.log("No Data Available!")
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
    <NavbarDashboard />
    <div className="patient-outer container">
      <form className='form-patient' method='POST'>
        <div>
          

        <div className='row'>
          <div className='col-sm-6'>
            <label htmlFor='fullname'> Patient's Full Name : </label>
            <select value={id} onChange={(e) => setId(e.target.value)}>
            {Array.isArray(patients) && patients.length > 0 ? (
                    patients.map((patients) => (
                        <option onClick={(e) => setId(e.target.value)}>{patients.id} - {patients.name} </option>
                    ))) : <></> }
            </select>
          </div>
          <div className='col-sm-6'>
            <label htmlFor='Room'> Room No. : </label>
            <input
              type='string'
              name='room'
              placeholder='Enter Room No.'
              value={room} required autoComplete='off'
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div> 


        <br></br>
        <div className='row'>
          <input type='submit' value='ADMIT' className='btn-sbmt' onClick={onSubmit} />
        </div>

        </div>
      </form>
    </div>
    </>
  )
};

export default AdmitPatient;
