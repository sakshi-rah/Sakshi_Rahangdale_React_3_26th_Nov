import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <>

            <div className="profile">
                {/* <!-- Navbar top --> */}
                <div class="navbar-top">
                    <div class="title">
                        <h1>Profile</h1>
                    </div>

                    {/* <!-- Navbar --> */}
                    <ul>

                        <li>
                            <a href="#sign-out">
                                <i class="fa fa-sign-out-alt fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- End --> */}
                </div>
                {/* <!-- End --> */}

                {/* <!-- Sidenav --> */}
                <div class="sidenav">


                    <div class="sidenav-url">
                        <div class="url">
                            <Link to={`/profile`} class="active">Profile</Link>
                            <hr align="center" />
                        </div>
                        <div class="url">
                            <Link to={`/login`}>Log In</Link>
                            <hr align="center" />
                        </div>
                        <div class="url">
                            <Link to={`/signup`}>Sign Up</Link>
                            <hr align="center" />
                        </div>
                        <div class="url">
                            <Link to={`/login`}>Log Out</Link>
                            <hr align="center" />
                        </div>
                    </div>
                </div>
                {/* <!-- End --> */}

                {/* <!-- Main --> */}
                <div class="main">
                    <h2>IDENTITY</h2>
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-pen fa-xs edit"></i>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>First Name</td>
                                        <td>:</td>
                                        <td>Sakshi</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>:</td>
                                        <td>Rahangdale</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>sakshirah@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No</td>
                                        <td>:</td>
                                        <td>1234567892</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

