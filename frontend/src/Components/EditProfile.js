import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function EditProfile() {

    const [values, setValues] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phone:"",
        city:""

    })
    const Change = (e) => {
        if (e.target.name === "image") {
            setValues({ ...values, image: e.target.files[0] });
        }
        else{
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    }

    useEffect(()=>{
        axios.post(`http://localhost:3000/idfetch/${localStorage.getItem('userid')}`)
            .then((res) =>{
                console.log(res,"res");
            if(res.data.data!==undefined){
                setValues(res.data.data)
            }
        })
        .catch((e) => {
                  //alert("error")
                // console.log(e)
            })
            },[])

    const Submit = (e) => {
    console.log(values);
    e.preventDefault();
        axios
        .post(`http://localhost:3000/editUser/${localStorage.getItem("userid")}`, values)
        .then((res) => {
        if (res.data.status == 500) {
                console.log(res);
                alert(res.data.msg);
        }
        else {
                console.log("Submitted", res);
                alert("Edited")
                window.location.reload(false);
            }
        })
        .catch((err) => {
                console.log("Error", err);
            });
    };
    


    return (
    <div>


    <header>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">BlogSpot</Navbar.Brand>
            <Nav className="me-xl">
            <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/UserLogin'>Home</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/AboutUs'>About Us</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/PostBlog'>Post a Blog</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/MyProfile'>My Profile</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/'>Logout</Link></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </header>
        
        {/* <form onSubmit={Submit}>
        <h2>Edit Details</h2><hr></hr>
        <p>
        First Name = <input type='text'  value={values.firstname} onChange={Change} name="firstname"/><br></br>
        Last Name = <input type='text'  value={values.lastname} onChange={Change} name="lastname"/><br></br>
        E-mail = <input type='text'  value={values.email} onChange={Change} name="email"/><br></br>
        Password = <input type='text'  value={values.password} onChange={Change} name="password"/><br></br>
        Phone = <input type='text'  value={values.phone} onChange={Change} name="phone"/><br></br>
        City  = <input type='text'  value={values.city} onChange={Change} name="city"/><br></br>
        
        <button type='submit' >Update</button>
        </p>
        </form> */}

<div className="formEdit">
<section >
      <form  className='registerform' onSubmit={Submit}> 
        <div class="container">
    <h1>Edit Profile</h1>
    
    <hr/>

    <label><b>First Name :</b></label>
    <input type="text" placeholder="Enter firstname" onChange={Change} name="firstname" value={values.firstname}/> <span> </span>

    <label><b> Last Name :  </b></label>
    <input type="text" placeholder="Enter lastname"  onChange={Change} name="lastname" value={values.lastname} /><br/><br/>

    <label><b>Email :</b></label>
    <input type="text" placeholder="Enter Email" onChange={Change} name="email" value={values.email}  /><span> </span>

    <label ><b>Password :  </b></label>
    <input type="password" placeholder="Enter Password"  onChange={Change} name="password" value={values.password}/><br/><br/>

    <label ><b>Phone :</b></label>
    <input type="number" placeholder="Enter phone"  onChange={Change} name="phone" value={values.phone}/><span> </span>

    <label><b>City :</b></label>
    <input type="text" placeholder="Enter city"  onChange={Change} name="city" value={values.city}/><br/><br/>

    <hr/>
    
    <button type="Submit" class="btn btn-info">Edit</button>
  </div>
  <br/>

  <div class="container signin">
    
  </div>
</form> 
      </section>
      </div>


    </div>
    )
}

export default EditProfile