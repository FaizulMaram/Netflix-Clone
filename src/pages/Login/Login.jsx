import Logo from '../../assets/logo.png';
import { useState } from 'react';

import './login.css';
const Login = () => {
  const[signState, setSignState] = useState("Sign In");
  return (
    <div className='login'>
      <img src={Logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Your Name' /> : <></>}
          
          <input type="email" placeholder='Email or phone number' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? 
          <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign up now</span></p> : 
          <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Log in</span></p>
        }
        </div>
      </div>
    </div>
  );
}

export default Login;
