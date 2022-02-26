import http from '../Services/httpCommon'
import { createContext, useEffect, useState } from 'react';
import data from '../Services/data';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {

        const loggedInRes = await data.checkSpotifyLogin();

        // data is the axios response body. returns true/false
        setLoggedIn(loggedInRes)
    }

    useEffect(() => {
        getLoggedIn();
    }, []);
    
    // Any componenets in the AuthContext.Provider will be passed the value={}
    return (
        <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};