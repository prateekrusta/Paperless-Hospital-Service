import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../assets/images/Loader123.gif';
import Swal from 'sweetalert2';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from "firebase/auth" 

const Register = () => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const history = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
    
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleFormSubmit =(e)=> {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailId, password)
    .then((useCredential) => {
        console.log(useCredential)
    })
    .catch((error) => {
        console.log(error)
    });
    
  };


  return (
    <>
      <div id="register" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            X
          </a>
          <h1>SIGN UP</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={emailId}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password" 
                name="password"
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="btn-sbmt-cont">
              <button type="submit" value="Login" className="btn-sbmt" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <img src={Loader} className="loginbtn-loader" alt="Loader" /> Signing up...
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
          <p>
            {error && <div className="error-message">{error}</div>}
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;