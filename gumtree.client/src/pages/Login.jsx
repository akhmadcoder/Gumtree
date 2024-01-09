import React from 'react';
import { Link } from 'react-router-dom';
function Login() {

    return (
        <div className="container-fluid">
            <div className="row p-3 text-center">
                <h1>Welcome to Gumtree.</h1>

                <hr></hr>
                <h5 class="mb-5">Sign in or Register to Post and manage your ads</h5>

                <div class="row justify-content-md-center">
                    <div class="col-md-3 d-grid">
                        <Link class="btn btn-outline-info btn-block" to="/userlogin">Login</Link>
                    </div>
                    <div class="col-md-3 d-grid">
                        <Link class="btn btn-outline-info btn-block" to="/register">Register</Link>
                    </div>
                </div>

                

            </div>
        </div>
   );
}

export default Login;