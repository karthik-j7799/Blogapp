import axios from 'axios';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function PostBlog() {

  const Navigate = useNavigate()
  const id = localStorage.getItem('userid')

  const [values,setValues]= useState({
    title:"",
    content:"",
    image:"",
  })


  const Change=(e)=>{
    if (e.target.name == "image") {
      setValues({ ...values, image: e.target.files[0] });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };



const Submit =(e) =>{
  e.preventDefault()


  axios.post(`http://localhost:3000/newPost/${localStorage.getItem(`userid`)}`, values, {             
      headers: {
          "Content-Type": "multipart/form-data",
      },
      }
)
  .then((e)=>{
      if(e.data.status===200){
          alert("post posted successfully")
          console.log(values)
          Navigate('/UserLogin')
          
      
      }
  })
  .catch((e)=>{
      console.log(e);
  })
}




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
        
          <form className='postblog' onSubmit={Submit}>
        <h2>Create Post</h2>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Title:</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="title" onChange={Change} required/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">What's on your Mind?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="content" onChange={Change}></textarea>
        </div>
        
        
        <div class="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" name="image" onChange={Change}/>
        
        </div>
        <br/>
        <div>
        <button type="submit" class="btn btn-primary">
          Post
        </button>
        </div>


        </form>

  



    </div>
  )
}

export default PostBlog