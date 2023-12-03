import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Register() {

  const Navigate = useNavigate();
  
  const [values,setValues]= useState({

      firstname:"",
      lastname:"",
      email:"",
      password:"",
      phone:"",
      city:""
  })

  const Change=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const Submit =(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:3000/addUser`,values)
    .then((e)=>{
      if(e.status === 200){
        alert("registered successfully")
        console.log(values)
        Navigate('/Login');
      }
    })
    .catch((e)=>{
      console.log(e);
    })
  }


  return (
    <div>
      <header>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            BlogSpot
          </a>
        </div>
      </nav>
      </header>
      <div className="formReg">
      <section >
      <form  className='registerform' onSubmit={Submit}> 
        <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label><b>First Name :</b></label>
    <input type="text" placeholder="Enter firstname" onChange={Change} name="firstname" required/> <span> </span>

    <label><b> Last Name :  </b></label>
    <input type="text" placeholder="Enter lastname"  onChange={Change} name="lastname" required/><br/><br/>

    <label><b>Email :</b></label>
    <input type="text" placeholder="Enter Email" onChange={Change} name="email"  required/><span> </span>

    <label ><b>Password :  </b></label>
    <input type="password" placeholder="Enter Password"  onChange={Change} name="password" required/><br/><br/>

    <label ><b>Phone :</b></label>
    <input type="number" placeholder="Enter phone"  onChange={Change} name="phone" required/><span> </span>

    <label><b>City :</b></label>
    <input type="text" placeholder="Enter city"  onChange={Change} name="city" required/><br/><br/>

    <hr/>
    <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
    <button type="Submit" class="btn btn-info">Register</button>
  </div>
  <br/>

  <div class="container signin">
    <p>Already have an account? <a href="/Login">Sign in</a>.</p>
  </div>
</form> 
      </section>
      </div>
    </div>
  );
}

export default Register;
