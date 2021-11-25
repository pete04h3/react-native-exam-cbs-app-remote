import { LOGIN, SIGNUP, LOGOUT, REFRESH_TOKEN, TOGGLE_VALID } from "../actions/UserActions";

const initialState = {
    loggedInUser: undefined,
    isValid: false,
    signupUser: undefined,
    token: undefined
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_VALID: 
        //state.isHappy = true; //NOO !!!! State mutation not allowed
        return { ...state, isValid: action.payload } ;

        case REFRESH_TOKEN:
            return { ...state, token: action.payload };
        
        case LOGOUT:
            return {...state, loggedInUser: undefined, token: undefined };

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