import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Login.css";
import TextBox from "../../components/TextBoxContainer/TextBox";
import ButtonConainer from "../../components/ButtonContainer/ButtonConainer";
import {Enums} from '../../constants/Enum/Enum'
import * as Constants from '../../constants/Constants'
import { AuthContext } from '../../reducer/context/AuthContext'
 
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { signIn } = React.useContext(AuthContext)
  const handleEmailPass = (val, type) => {
    switch (type) {
      case Enums.LogInFields.Email: setEmail(val.target.value); break
      case Enums.LogInFields.Password: setPass(val.target.value); break
      default: break;
    }
  }; 

  const handleSubmit = () => {
    if (email === "" || pass === "") {
      alert("Invalid Email and Password") 
      return
    }
    signIn()
  };

  return (
    <div>
      <Header />
      <div className="container containerCenter">
        <div className="card containerCenter">
          <form action="">
            <label className="cardTitle">Log in and get to work!</label>
            <TextBox
              placeholder="Enter your email"
              onChangeText={val => handleEmailPass(val, Enums.LogInFields.Email)}
              val={email}
              id="email"
              needSecure={false}
            />
            <TextBox
              placeholder="Enter your password"
              onChangeText={val => handleEmailPass(val, Enums.LogInFields.Password)}
              val={pass}
              id="pass"
              needSecure={true}
            />
            <ButtonConainer title="Login" onSubmits={handleSubmit} />
            <div className="containerCenter margin30">
              <label className="font14">
                Don't have an account? <a href={Constants.SignUpPath}>Sign Up</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
