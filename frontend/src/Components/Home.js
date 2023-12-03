import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        
            <div>
            
            <div className='homeback'  >
            <section >
            <h1>Welcome to BlogSpot</h1><br/>
            <Link to='/Register'><button type="button" class="btn btn-info">Register</button> </Link>
            <span> / </span>
            <Link to='/Login'><button type="button" class="btn btn-info">Login</button></Link>
            <span> / </span>
            <Link to='/Admin'><button type="button" class="btn btn-info">Admin</button></Link>
            </section>
            </div>


        </div>
        
    )
}

export default Home