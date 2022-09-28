// reducer related to auth state;

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_LOADING":
            return {
                ...state,
                isAuth: false,
                isToken: null,
                isLoading: true,
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuth: true,
                isToken: action.payload,
                isLoading: false,
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                isAuth: false,
                isToken: null,
                isLoading: false,
            }
        default:
            return state

    }
}

