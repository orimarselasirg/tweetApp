import { useAuth0 } from "@auth0/auth0-react";
import './login.css'
import logo from  '../../assets/logoPostApp.png'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column' , alignItems: 'center'}}>
          <img src={logo} alt="" width={100} height={110} />
          <span style={{fontSize: 14, color: 'grey'}}>by Tita Media</span>
          <h2 style={{fontSize: 30, marginBottom: -35}}>Welcome</h2>
        </div>
          <button className='loginButton' onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
  )
};

export default LoginButton;