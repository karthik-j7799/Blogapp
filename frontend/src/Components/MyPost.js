import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyPost() {

    const [progress,setProgress]= useState([]);

    useEffect(() =>{
        axios
        .post(`http://localhost:3000/myPost/${localStorage.getItem('userid')}`)
        .then((res) => {
            console.log(res)
            if(res.data.data !== undefined){
                setProgress(res.data.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


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




          <h1 className='Usertop'>My blogs :</h1>
        <div class="row">
        {   

            progress.map((e)=>{
                return(
                    
            <>
                
                    <div className="card col-6 mb-3" style={{width: "30rem"}}>
                    <div className="card-body">
                    <img src={`http://localhost:3000/${e.image.filename}`} alt='hello' width="420px" height="250px"/>
                    
                    <h5 class="card_title1"><label>@writer : {e.user.firstname}</label></h5>
                    <h5 class="card_title1"><label>Title : {e.title}</label></h5>
                    <h5 class="card_title2"><label>Content : {e.content}</label></h5>
                    <Link to={`/EditPost/${e._id}`}><button type="button" class="btn btn-info">Edit Post</button></Link>
                    </div>
                    </div>
                    <br/>
            </>
            
                )
            })
        }
        </div>


        



    </div>
    )
}

export default MyPost