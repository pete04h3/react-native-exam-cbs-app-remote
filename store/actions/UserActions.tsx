import User from "../../models/User";

export const SIGNUP = 'SIGNUP';
export const TERMS = "TERMS";
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const UPDATE_SIGNUP_INFORMATION = 'UPDATE_SIGNUP_INFORMATION';
export const EVENT_NOTIFICATIONS_TOGGLE = 'EVENT_NOTIFICATIONS_TOGGLE';
export const CHAT_NOTIFICATIONS_TOGGLE = 'CHAT_NOTIFICATIONS_TOGGLE';

import { useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

export const TOGGLE_VALID = 'TOGGLE_VALID';
import Navigation from "../../components/Navigation";
import { bool } from "prop-types";

export const toggleUserValid = (isValid: any) => {
    return { type: TOGGLE_VALID, payload: isValid }
}

//const api_key = 'AIzaSyBV2KOnzeYrwe6Lwz2B_NbMExB2Jo2aTNs'; // CHRISTIANS API_KEY 
const api_key = 'AIzaSyCA8nxrv7yFDZ2uy5B4DUgHZft-aKHkuTE';

export const restoreUser = (user: any, token: any) => {
    return { type: LOGIN, payload: { user, token } };
}

// NOT SURE IF TERMS IS WORKING
export const terms = (checked: any, setChecked: any) => {

    console.log(checked, setChecked)
    return { type: TERMS };
};

export const logout = () => {
    SecureStore.setItemAsync('userToken', "");
    SecureStore.setItemAsync('user', "");
    SecureStore.setItemAsync('expiration', "");
    SecureStore.setItemAsync('refreshToken', "");
    return { type: LOGOUT };
};

export const refreshToken = (refreshToken: string) => {

    return async (dispatch: any) => { // redux thunk
        console.log("refreshToken");
        console.log(refreshToken);
        const response = await fetch('https://securetoken.googleapis.com/v1/token?key=' + api_key, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...

                refresh_token: refreshToken,
                grant_type: 'refresh_token'
            })
        });

        const data = await response.json(); // json to javascript
        console.log("Data after refresh token");
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {

            dispatch({ type: REFRESH_TOKEN, payload: data.id_token })
        }
    };
}

export const login = (email: string, password: string, isValid: any) => {
    return async (dispatch: any) => { // redux thunk
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + api_key, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {

            const user = new User(data.localId, '', '', '', email);
            SecureStore.setItemAsync('userToken', data.idToken);
            SecureStore.setItemAsync('user', JSON.stringify(user));
            let expiration = new Date();
            //token sættes en time foran
            expiration.setSeconds(expiration.getSeconds() + parseInt(data.expiresIn));
            SecureStore.setItemAsync('expiration', JSON.stringify(expiration));
            SecureStore.setItemAsync('refreshToken', data.refreshToken);
            dispatch({ type: LOGIN, payload: { user, token: data.idToken } })
            dispatch(toggleUserValid(!isValid));
        }
    };
};


export const signup = (email: any, password: any, propsNav: any) => {
    // console.log(email + " " + password);
    return async (dispatch: any, getState: any) => { // redux thunk
        // console.log("again" + email + " " + password);
        const token = getState().user.token;
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + api_key, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });
        const data = await response.json(); // json to javascript
        const responseRealtime = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/userinfo.json?auth=' + data.idToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                id: data.localId,
                firstname: "",
                lastname: "",
                imageUrl: "",
                email: email,
                studyProgramme: "",
                chatToggle: false,
                eventToggle: false,

            })
        });

        const dataRealtime = await responseRealtime.json(); // json to javascript

        console.log(dataRealtime, 'prøv og se den her hahahahahhahahahahahahahahaha');
        console.log(data);
        if (!response.ok && !responseRealtime.ok) {
            //There was a problem..
        } else {
            console.log('find navn her', responseRealtime);
            const user = new User(dataRealtime.name, '', '', '', email, '', false, false);

            dispatch({ type: SIGNUP, payload: { user, token: data.idToken } })
            propsNav.navigation.navigate('OnboardUserinfoScreen') // working
        }
    };
};


export const updateUser = (fullName: string, studyProg: string, userInfo: any, isValid: any, props: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('vi er her, update');
    console.log(fullName, studyProg, userInfo, isValid);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: fullName,
                studyProgramme: studyProg,
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            const user = new User(userInfo.id, fullName, userInfo.lastname, userInfo.imageUrl, userInfo.email, studyProg, userInfo.chatToggle, userInfo.eventToggle)
            dispatch({ type: UPDATE_SIGNUP_INFORMATION, payload: user })
            props.navigation.navigate('NOTIFCATIONS') // working
        }
    };
};

export const updateNotifications = (userInfo: any, props: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('vi er her find id');
    console.log(userInfo);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatToggle: true,
                eventToggle: true
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, true, true)
            SecureStore.setItemAsync('user', JSON.stringify(user))
            dispatch({ type: EVENT_NOTIFICATIONS_TOGGLE, payload: user })
            dispatch({ type: CHAT_NOTIFICATIONS_TOGGLE, payload: user })
            props.navigation.navigate('ONBOARDINGSCREEN1') // working

        }
    };
};

export const toggleChatNotification = (userInfo: any, setNotificationBoolean: boolean) => {

    return async (dispatch: any, getState: any) => { // redux thunk
        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatToggle: !setNotificationBoolean,

            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, !setNotificationBoolean, userInfo.eventToggle)
            // SecureStore.setItemAsync('user', JSON.stringify(user))
            dispatch({ type: CHAT_NOTIFICATIONS_TOGGLE, payload: user })

        }
    };
};

export const toggleEventNotification = (userInfo: any, setNotificationBoolean: boolean) => {

    return async (dispatch: any, getState: any) => { // redux thunk
        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatToggle: !setNotificationBoolean,

            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, userInfo.chatToggle, !setNotificationBoolean)
            // SecureStore.setItemAsync('user', JSON.stringify(user))
            dispatch({ type: EVENT_NOTIFICATIONS_TOGGLE, payload: user })

        }
    };
};

export const updateGoingUser = (eventId: any, user: any) => {

    console.log('vi er her');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;

        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/goingUsers.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log('goingUserAdded');
        }
    };
};

export const updateInterestedUser = (eventId: any, user: any) => {

    console.log('vi er her');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;

        const response = await fetch('https://kvaliapp-184d1-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/interestedUsers.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log('interestedUserAdded');

        }
    };
};