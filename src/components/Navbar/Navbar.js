import React from 'react';
import './Navbar.css'; 

const navbar = () => {
    return (
        <div>
            {/* Icon */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"> <img src="https://www.iflmadrid.com/sites/default/files/styles/medium/public/team/logo/branch_liverpool2.jpg?itok=gCP3jpTE" class="img-thumbnail"/> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            {/* Pages */}
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                         </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Stats</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
        {/* Login and Register */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="{{ url('/login') }}">Login</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="{{ url('/register') }}">Register</a>
                        </li>
                    </ul>
        </div>
</nav>
            </div>
    )
}

export default navbar;