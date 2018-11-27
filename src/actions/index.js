import axios from 'axios';
import { 
    USER_LOGIN_SUCCESS, 
    USER_NOT_FOUND, 
    LOGIN_SYSTEM_ERROR, 
    LOGIN_LOADING,
    LOGOUT
} from './types';

export const onUserLogout = () => {
    return { type: LOGOUT }
}

export const onUserLogin = ({ username, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_LOADING })
        // setTimeout(() => loginYok(dispatch,username,password), 2000);
        loginYok(dispatch,username,password);
    }
}

export const keepLogin = (username) => {
    return { type: USER_LOGIN_SUCCESS, payload: username }
}

var loginYok = (dispatch,username,password) => {
    axios.get('http://localhost:1997/users', {
            params: {
                username,
                password
            }
        }).then((res) => {
            console.log(res)
            if (res.data.length > 0) {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: username })
            }
            else {
                dispatch({ type: USER_NOT_FOUND })
            }
        }).catch((err) => {
            console.log(err)
            dispatch({ type: LOGIN_SYSTEM_ERROR })
        })
}