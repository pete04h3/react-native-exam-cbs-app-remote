import { LOGIN, SIGNUP, LOGOUT, REFRESH_TOKEN, TOGGLE_VALID, UPDATE_SIGNUP_INFORMATION, EVENT_NOTIFICATIONS_TOGGLE, CHAT_NOTIFICATIONS_TOGGLE } from "../actions/UserActions";

const initialState = {
    loggedInUser: undefined,
    isValid: false,
    token: undefined
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_SIGNUP_INFORMATION:
            return { ...state, loggedInUser: action.payload };

        case TOGGLE_VALID: 
            return { ...state, isValid: action.payload } ;

        case EVENT_NOTIFICATIONS_TOGGLE:
            return { ...state, loggedInUser: action.payload };

        case CHAT_NOTIFICATIONS_TOGGLE:
            return { ...state, loggedInUser: action.payload };

        case REFRESH_TOKEN:
            return { ...state, token: action.payload };
        
        case LOGOUT:
            return {...state, loggedInUser: undefined, token: undefined};

        case SIGNUP:
            return { ...state, loggedInUser: action.payload.user, token: action.payload.token };
            
        case LOGIN:
            return { ...state, loggedInUser: action.payload.user, 
                token: action.payload.token };

    default:
        return state;
    }
}

export default UserReducer;