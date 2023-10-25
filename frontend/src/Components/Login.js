import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Login() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">
        
        BlogSpot
    </a>
  </div>
</nav>
        <section className="formlog">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address :
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password :
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </section>
    </div>
  );
}

export default Login;
