import React, {useState} from "react";
import Header from "../../components/Header/Header";
import "./SignUp.css";
import TextBox from "../../components/TextBoxContainer/TextBox";
import ButtonConainer from "../../components/ButtonContainer/ButtonConainer";
import * as Constants from '../../constants/Constants'
import { AuthContext } from '../../reducer/context/AuthContext'
import {Enums} from '../../constants/Enum/Enum'
// import { useHistory } from "react-router-dom";

function SignUp() {
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, reSetPass] = useState("");
   
  const { signIn } = React.useContext(AuthContext)

  const updateFields = (val, type) => {
    switch (type) {
      case Enums.SignUpFields.Email: setEmail(val.target.value); break
      case Enums.SignUpFields.Password: setPass(val.target.value); break
      case Enums.SignUpFields.RePass: reSetPass(val.target.value); break
      default: break;
    }
  }
  
  const handleSubmit = () => {
    if (email === "" || pass === "" || repass === "") {
      alert("Invalid Email, Password and Re-Password") 
      return
    }
    signIn()
  }

  return (
    <div>
      <Header />
      <div className="container containerCenter">
        <div className="card containerCenter">
          <form action="">
            <label className="cardTitle">Sign Up and get to work!</label>
            <TextBox 
              placeholder='Enter your email'
              onChangeText={val => updateFields(val, Enums.SignUpFields.Email)}
              val={email}
              id="email"
              needSecure={false}/>
            <TextBox 
              placeholder='Enter your password' 
              onChangeText={val => updateFields(val, Enums.SignUpFields.Password)}
              val={pass}
              id="pass"
              needSecure={false}/>
            <TextBox 
              placeholder='Enter your re-type password' 
              onChangeText={val => updateFields(val, Enums.SignUpFields.RePass)}
              val={repass}
              id="repass"
              needSecure={false}/>
            <ButtonConainer title='SignUp' onSubmits={handleSubmit}/>
            <div className="containerCenter margin30">
              <label className="font14">
                Already have an account? <a href={Constants.LoginPath}>Login</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
