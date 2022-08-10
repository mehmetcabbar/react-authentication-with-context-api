export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const emailAction = (email) => {
    return {
        type: SET_EMAIL,
        action: email
    }
}

export const passwordAction = (password) => {
    return {
        type: SET_PASSWORD,
        action: password
    }
}

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
}