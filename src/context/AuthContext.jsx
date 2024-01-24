import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});


function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: '',
    });
    const navigate = useNavigate();



    function login(email) {
        toggleIsAuth({
            isAuth: true,
            user: email,
        });
        console.log('De gebruiker is ingelogd!');
        navigate('/profile')
    }

    function logout() {
        toggleIsAuth({
            isAuth: false,
            user: '',
        });
        console.log('De gebruiker is uitgelogd!')
        navigate('/')
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;