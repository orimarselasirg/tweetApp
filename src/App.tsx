import { Route } from "wouter";
import LoginButton from "./screens/Login/LoginScreen";
import { useAuth0 } from '@auth0/auth0-react';
import { Home } from "./screens/Home/Home";
import './App.css'
import { NavBar } from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";

const App = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
return (
  <div>
      {
        isLoading 
        ? 
        <Loading/> 
        :
        !isAuthenticated &&
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