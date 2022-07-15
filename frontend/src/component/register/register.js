import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import '../styles/register.css';

const Signup = () => {

	const history = useHistory();
	const [user, setUser] = useState({
		name : "", email : "", phone: "", password : "" , cpassword: ""
	})

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({...user, [name]:value});
	}

	const PostData = async (e) => {
		e.preventDefault();

		const { name, email, phone, password, cpassword} = user;

		const res = await fetch('http://localhost:5000/register', {
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				name, email, phone, password, cpassword	
			})
		});

		const data = await res.json();

		if(data.status === 422 || !data){
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		}
		else{
			window.alert("Registration Successful");
			console.log("Registration Successful");

			history.push("/login");
		}
	}

  	return (
    <>
        <div className="RegisterContainer sign-up h-100">
    		<div className="registerRow h-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4 mb-4">
							<h1 className="h2">Sign Up.</h1>
						</div>

						<div className="registercard">
							<div className="registercard-body">
								<div className="m-sm-4">
									<form method='POST'>
										<div className="form-group position-relative">
                                            <span className="zmdi zmdi-account zm"></span>
                                            <input classNameName = "ico" type="text" name = "name" id="name" className="form-control" 
											value={user.name}
											onChange = {handleInputs}
											placeholder="Enter your name"></input>
                                        </div>
										<div className="form-group position-relative">
                                            <span className="zmdi zmdi-email zm"></span>
                                            <input classNameName = "ico" type="email" name = "email" id="email" className="form-control" 
											value={user.email}
											onChange = {handleInputs}
											placeholder="Enter your Email"></input>
                                        </div>
										<div className="form-group position-relative">
                                            <span className="zmdi zmdi-phone zm"></span>
                                            <input classNameName = "ico" type="number" name = "phone" id="phone" className="form-control" 
											value={user.phone}
											onChange = {handleInputs}
											placeholder="Enter your Phone Number"></input>
                                        </div>
                                        <div className="form-group position-relative">
                                            <span className="zmdi zmdi-lock zm"></span>
                                            <input classNameName = "ico" type="password" name = "password" id="password" className="form-control" 
											value={user.password}
											onChange = {handleInputs}
											placeholder="Enter your Password"></input>
                                        </div>
										<div className="form-group position-relative">
										<span className="zmdi zmdi-lock-outline zm"></span>
											<input classNameName="ico" type="password" name = "cpassword" id="password" className="form-control" 
											value={user.cpassword}
											onChange = {handleInputs}
											placeholder="Re-Enter password"></input>
										</div>
										<div className="text-center mt-3 form-button">
                                            <input type="submit" name="signup" id="signup" onClick = {PostData} className="btn btn-primary" value="Register"/>
										</div>
									</form>
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

export default Signup