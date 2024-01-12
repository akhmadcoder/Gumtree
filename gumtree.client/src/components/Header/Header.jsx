import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const username = localStorage.getItem('accessUsername');

    return (
        <div class="container-fluid bg-info">
          <div class="row p-3">
           <div class="col-md-1">
                    <Link class="nav-link" to="/"><b>GumTree</b></Link>
           </div>
            <div class="col-md-6">
                <form class="d-flex">
                        <input class="form-control me-2" type="text" placeholder="Search" />
                        <button class="btn btn-primary" type="button">Search</button>
                </form>
            </div>
            <div class="col-md-2">
                
            </div>
            <div class="col-md-1">
                    <a class="nav-link float-end" href="#">Sell+</a>
                </div>
                {username ?
                    (<div class="col-md-2">
                        <Link class="nav-link" to="/logout">Hi {username}, Logout</Link>
                    </div>
                    ) : (<div class="col-md-2">
                        <Link class="nav-link" to="/login">Login / Register</Link>
                    </div>)}
            
            </div>
            
        </div>

   );
}




export default Header;