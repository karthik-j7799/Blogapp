import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {

    const Navigate=useNavigate()

    const [values,setValues] = useState({
    email:"",
    password:""
    })

    const Change =(e)=>{setValues({...values,[e.target.name]:e.target.value})}

    const Submit =(e)=>{
        e.preventDefault()
        if(values.email ==="admin" && values.password==="admin"){
            alert("Logged in as admin")
            Navigate("/AdminHome")
        }
        else{
            alert("Invalid mail or password")
        }
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
      <h1>Admin Login</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address :
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={Change}
            name="email"
            required
          />

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
  )
}

export default Admin