import {jwtDecode} from "jwt-decode";


function isTokenValid(jwtToken) {
    const decodedToken = jwtDecode(jwtToken);
    const currentDate = new Date();

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log('token expired.');
        return false;
    } else {
        console.log('valid token')
        return true;
    }

}

export default isTokenValid;