import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
//import "./Login.css"; Import CSS file for additional styling

export const Login = () => {
     const navigate = useNavigate();
     const { login } = AuthData();
     const [formData, setFormData] = useState({ userName: "", password: "" });
     const [errorMessage, setErrorMessage] = useState(null);
     const [agreeTerms, setAgreeTerms] = useState(false);

     const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
     };

     const handleCheckboxChange = () => {
          setAgreeTerms(!agreeTerms);
     };

     const doLogin = async () => {
          try {
               if (!agreeTerms) {
                    throw new Error("Please agree to the terms and conditions.");
               }
               await login(formData.userName, formData.password);
               navigate("/account");
          } catch (error) {
               setErrorMessage(error.message);
          }
     };

     return (
          <div className="page">
               <div className="split-layout">
                    <div className="left-half">
                         {/* <h2>Discover the world's top Designers & Creatives.</h2> */}
                         <img src="/log.jpg" alt="image" width={300} />
                    </div>
                    <div className="right-half">
                         <div className="login-container">
                              <h2>Login page</h2>
                              <div className="inputs">
                                   <div className="input">
                                        <input
                                             value={formData.userName}
                                             onChange={handleInputChange}
                                             name="userName"
                                             type="text"
                                             placeholder="Username"
                                        />
                                   </div>
                                   <div className="input">
                                        <input
                                             value={formData.password}
                                             onChange={handleInputChange}
                                             name="password"
                                             type="password"
                                             placeholder="Password"
                                        />
                                   </div>
                                   <div className="terms">
                                        <input
                                             type="checkbox"
                                             checked={agreeTerms}
                                             onChange={handleCheckboxChange}
                                        />
                                        <label>
                                             Login to our Website means you're okay with our{" "}
                                             <a href="#">Terms of Service</a>,{" "}
                                             <a href="#">Privacy Policy</a>, and our default Notification
                                             Settings.
                                        </label>
                                   </div>
                                   <div className="custom-button-container">
                                        <button className="custom-button" onClick={doLogin}>
                                             Log in
                                        </button>
                                   </div>
                                   {errorMessage ? (
                                        <div className="error">{errorMessage}</div>
                                   ) : null}
                                   <div className="signup-prompt">
                                        New user? <a href="#">Sign up</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
