import authContext from '../../Context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {

  // Reads value from AuthContext to check if user is logged in
  //const {loggedIn} = useContext(authContext);

  return (
    <div>
        <div>
            <div>
              <div id="login">
                <h1>First, log in to spotify</h1>
                <a href='http://localhost:4000/login'>Log in</a>
              </div>
            </div>
        </div>
    </div>
  )
    
}

export default Login