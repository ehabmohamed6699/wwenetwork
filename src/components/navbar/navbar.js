import React from "react";
// import Image from '../../media/WWE_Logo.svg.png'

export default function Navbar(){
    return(
        <div className="container-fluid bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/841px-WWE_Logo.svg.png" width="50" height="50" alt="cam"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-start justify-content-lg-between gap-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">WWE NETWORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHOWS</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">SUPERSTARS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TICKETS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHOP</a>
                        </li>
                        </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex ">
                        <input className="form-control mr-sm-2 rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-danger my-2 my-sm-0 rounded-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}