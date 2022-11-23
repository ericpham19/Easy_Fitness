const userReducer = (state = { user : null, isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'SET_USER':
        return { ...state, user: action.payload, isLoggedIn: true };
        case 'LOG_OUT':
        return { ...state, user: null, isLoggedIn: false };
        default:
        return state;
    }
}

export default userReducer;