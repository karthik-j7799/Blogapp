import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyProfile() {




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
          <section className='adminHomee' >
            <h1>  :) </h1><br/>
            <h2>My Profile</h2> <br/>
            <Link to='/MyPost'><button type="button" class="btn btn-info">My Post</button> </Link>
            <span> / </span>
            
            <Link to='/EditProfile'><button type="button" class="btn btn-info">Edit Profile</button></Link>
            </section>
    </div>
  )
}

export default MyProfile