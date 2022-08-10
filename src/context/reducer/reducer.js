export function reducer(state = {}, action) {
    switch (action.type) {
        case
            "SET_EMAIL": state.email = action.payload
            return { ...state }
        case "SET_PASSWORD": state.password = action.payload
            return { ...state }
        case "LOGIN": state.isLoggedIn = action.payload
            return { ...state }
        case "LOGOUT": state.isLoggedIn = action.payload
            return { ...state }
        default:
            return state
    }
}
