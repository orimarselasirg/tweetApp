import { Route } from "wouter";
import LoginButton from "./screens/Login/LoginScreen";
import { useAuth0 } from '@auth0/auth0-react';
import { LogOut } from "./screens/Login/LogOut";
import { Home } from "./screens/Home/Home";
import './App.css'
import { NavBar } from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";

const App = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  console.log(user);
return (
  <div>
      {
        isLoading 
        ? 
        <Loading/> 
        :
        !isAuthenticated &&
        // <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', borderRadius: 5}}>
        //   <div>
        //     <h3>Welcome to PostApp Tita Media</h3>
        //   </div>
        // </div>
          <LoginButton/>
      }
      {
        isAuthenticated &&
        <>
          <NavBar picture={user?.picture} user={user?.name}/>
          <Route path= '/' component={Home}/>
        </>
      }
    </div>
    );
  }


export default App