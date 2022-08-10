import { createContext, useEffect, useState } from 'react';
import data from '../Services/data';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {

        const loggedInRes = await data.getUserData();

        // data is the axios response body. returns 401 if not logged in.
        if (loggedInRes.data.status === 401) {
          setLoggedIn(false)
        } else {
          setLoggedIn(true)
        }
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