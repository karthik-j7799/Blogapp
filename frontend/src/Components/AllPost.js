import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AllPost() {

  const [values,setValues]=useState([])
    
    useEffect(()=>{
        axios.post(`http://localhost:3000/viewPost`)
        .then((res)=>{
            console.log(res,"res")
            if(res.data.data!==undefined){
                setValues(res.data.data)
            }
        })
        .catch((e)=>{ })
    },[])

    const delPost =(id) =>{
        setValues(prevArray => prevArray.filter(item=> item._id !== id));
        console.log(id)

        axios.post(`http://localhost:3000/delPost/${id}`,values)
        .then((e)=>{
            alert("Post delete Successfully")
        })
        .catch((e)=>{
            console.log(e)
            alert("error deleting")
        })
    }

  return (
    <form>
        <header>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">BlogSpot</Navbar.Brand>
            <Nav className="me-xl">
            <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/AdminHome'>Home</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/AllPost'>All Post </Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/AllUsers'>All Users</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/ContactUs'>Contact Us</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/'>Logout</Link></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </header>
        <h1 className='Usertop'>View All Post :</h1>
        <div class="row">
        {   

            values.map((e)=>{
                return(
                    
            <>
                
                    <div className="card col-6 mb-3" style={{width: "30rem"}}>
                    <div className="card-body">
                    <img src={`http://localhost:3000/${e.image.filename}`} alt='hello' width="420px" height="250px"/>
                    <h5 class="card_title1"><label>Title : {e.title}</label></h5>
                    <h5 class="card_title2"><label>Content : {e.content}</label></h5>
                    <button type="button" class="btn btn-primary" onClick={()=> delPost(e._id)}>Delete</button><br></br><hr/>
                    </div>
                    </div>
                    <br/>
            </>
            
                )
            })
        }
        </div>
        </form>
  )
}

export default AllPost