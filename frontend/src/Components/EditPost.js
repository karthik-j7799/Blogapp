import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditPost() {

    const Navigate = useNavigate()

    const {id}=useParams()



    const [values, setValues] = useState({
        title:"",
        content:"",
        image:"",

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
        axios.post(`http://localhost:3000/postidfetch/${id}` , values)
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
            .post(`http://localhost:3000/editPost/${id}`, values)
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

        const deletefn = (id) => {
            // setValues(prevArray => prevArray.filter(item => item._id !== id));
            console.log(id)
            axios.post(`http://localhost:3000/delPost/${id}`, values)
            
                .then((a) => {
            
                    alert("Deleted Sucessfully") 
                    Navigate('/UserLogin')
                })
                .catch((e) => {
                alert("error")
                console.log(e)
                })
            }
    
    return (
    
    <div>

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
        <h2>Edit Post</h2>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Title:</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="title" onChange={Change} value={values.title} />
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">What's on your Mind?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="content" onChange={Change} value={values.content}></textarea>
        </div>
        
        
        <div class="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" name="image" onChange={Change} />
        
        </div>
        <br/>
        <div>
        <button type="submit" class="btn btn-primary">
            Edit
        </button>
        <span> / </span>

        <button type="button" class="btn btn-danger" onClick={()=>{deletefn(id)}}>
            Delete
        </button>

        </div>


        </form>

  



    </div>



    </div>
    )
}

export default EditPost