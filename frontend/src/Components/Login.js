import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const Navigate=useNavigate()

  const [values,setValues] = useState({
    email:"",
    password:""
  })

  const Change =(e)=>{setValues({...values,[e.target.name]:e.target.value})}

  const Submit = (e) =>{
    console.log(e)
    e.preventDefault()
    console.log(values)
    axios.post(`http://localhost:3000/login`,values)
    .then((e)=>{
      if(e.data.status === 200){
        Navigate('/UserLogin')
        localStorage.setItem("userid", e.data.data._id)
      }
      else{
        alert("Wrong username or password")
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
        <div className="formlog">
        <section >
      <form onSubmit={Submit}>
      <h1>Login</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address :
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={Change}
            name="email"
            required
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password :
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={Change}
            name="password"
            required
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </section>
      </div>
    </div>
  );
}

export default Login;
