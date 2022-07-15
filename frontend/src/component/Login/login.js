import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/login.css';
import { NavLink, useHistory} from "react-router-dom";

const Signin = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginUser = async(e) => {
        e.preventDefault();
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            }),
            // credentials: 'include'
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }
        else{
            window.alert("Login Successful");
            console.log("Login Successful");
            history.push('/');
        }
    }
  return (
    <>
        {<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" /> }
        <div><div className="outside">
            <div class="form-container">
                    <div class="row">
                        <div class="col-md-11 mt-60 mx-md-auto">
                            <div class="login-box bg-white pl-lg-5 pl-0">
                                <div class="row no-gutters align-items-center">
                                    <div class="col-md-6">
                                        <div class="form-wrap bg-white">
                                            <h4 class="btm-sep pb-3 mb-5">Login</h4>
                                            <form class="form" method="post" action="#">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group position-relative">
                                                            <span class="zmdi zmdi-account zm"></span>
                                                            <input className = "ico" type="email" id="email" class="form-control" 
                                                            value={email}
                                                            onChange = {(e) => setEmail(e.target.value)}
                                                            placeholder="Email Address">
                                                            </input>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group position-relative">
                                                            <span class="zmdi zmdi-email zm"></span>
                                                            <input className = "ico" type="password" id="password" class="form-control" 
                                                            value={password}
                                                            onChange = {(e) => setPassword(e.target.value)}
                                                            placeholder="Password">
                                                            </input>                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-12 mt-30">
                                                    <input type="submit" name="signin" id="signin" class="btn btn-primary"
                                                            value={"Login"}
                                                            onClick = {loginUser}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6 right-side">
                                        <div class="content text-center">
                                            <div class="border-bottom pb-5 mb-3">
                                                <h3 class="c-black">First time here?</h3>
                                                <NavLink to="/register" class="btn btn-lg btn btn-outline-dark signup">Sign Up
                                                        </NavLink>
                                            </div>
                                            <h5>Or</h5>
                                            <h5 class="c-black mb-4 mt-n1">Sign In With Google !</h5>
                                            <div class="socials">
                                                <a href="/" class="zmdi zmdi-google"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default Signin