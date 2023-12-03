import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AllUsers() {

    const [values,setValues]=useState([])
    
    useEffect(()=>{
        axios.post(`http://localhost:3000/ViewUser`)
        .then((res)=>{
            console.log(res,"res")
            if(res.data.data!==undefined){
                setValues(res.data.data)
            }
        })
        .catch((e)=>{ })
    },[])

    const deleteUser =(id) =>{
        setValues(prevArray => prevArray.filter(item=> item._id !== id));
        console.log(id)

        axios.post(`http://localhost:3000/delUser/${id}`,values)
        .then((e)=>{
            alert("User delete Successfully")
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
        <h1 className='Usertop'>View All Users :</h1>
        <div class="row">
        {   

            values.map((e)=>{
                return(
                    
            <>
                
                    <div className="card col-6 mb-3" style={{width: "30rem"}}>
                    <div className="card-body">
                    <h5 class="card_title1"><label>First Name : {e.firstname}</label></h5>
                    <h5 class="card_title2"><label>Last Name : {e.lastname}</label></h5>
                    <h5 class="card_title3"><label> Email : {e.email}</label></h5>
                    <h5 class="card_title3"><label> City : {e.city}</label></h5>
                    <h5 class="card_title3"><label> Phone : {e.phone}</label></h5><br/>
                    <button type="button" class="btn btn-primary" onClick={()=> deleteUser(e._id)}>Delete</button><br></br><hr/>
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

export default AllUsers