export const onUserLogin = (username) => {
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: username
    }
}