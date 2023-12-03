import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
        <header>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">BlogSpot</Navbar.Brand>
            <Nav className="me-xl">
            <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/AdminHome'>Home</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/AllPost'>All Post </Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/AllUsers'>All Users</Link></Nav.Link>
            <Nav.Link href="#About"><Link class="btn btn-outline-light" aria-current="page" to='/'>Logout</Link></Nav.Link>
            </Nav>
        </Container>
        </Navbar>
          </header>
          <section className='adminHomee' >
            <h1>Welcome Admin :) </h1><br/>
            <h2>Control the WebApp from here</h2> <br/>
            <Link to='/AllPost'><button type="button" class="btn btn-info">All Post</button> </Link>
            <span> / </span>
            <Link to='/AllUsers'><button type="button" class="btn btn-info">All User</button></Link>
            </section>
    </div>
  )
}

export default AdminHome