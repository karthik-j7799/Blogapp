import React from "react";

function Register() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            BlogSpot
          </a>
        </div>
      </nav>

      <section className="formReg">
      <form  className='registerform'> 
        <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label><b>First Name :</b></label>
    <input type="text" placeholder="Enter firstname" required/> <span> </span>

    <label><b> Last Name :  </b></label>
    <input type="text" placeholder="Enter lastname"  required/><br/><br/>

    <label><b>Email :</b></label>
    <input type="text" placeholder="Enter Email"  required/><span> </span>

    <label ><b>Password :  </b></label>
    <input type="password" placeholder="Enter Password" required/><br/><br/>

    <label ><b>Phone :</b></label>
    <input type="number" placeholder="Enter phone" required/><span> </span>

    <label><b>City :</b></label>
    <input type="text" placeholder="Enter city"  required/><br/><br/>

    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="button" class="btn btn-info">Register</button>
  </div>
  <br/>

  <div class="container signin">
    <p>Already have an account? <a href="/Login">Sign in</a>.</p>
  </div>
</form> 
      </section>
    </div>
  );
}

export default Register;
