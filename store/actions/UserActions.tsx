import User from "../../models/User";

export const SIGNUP = 'SIGNUP';
export const TERMS = "TERMS";
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const EVENT_NOTIFICATIONS_TOGGLE = 'EVENT_NOTIFICATIONS_TOGGLE';
export const CHAT_NOTIFICATIONS_TOGGLE = 'CHAT_NOTIFICATIONS_TOGGLE';
export const UPDATE_SIGNUP_INFORMATION = 'UPDATE_SIGNUP_INFORMATION';

import { useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

export const TOGGLE_VALID = 'TOGGLE_VALID';
import Navigation from "../../components/Navigation";

// #############
// API KEY
// #############

//const api_key = 'AIzaSyBV2KOnzeYrwe6Lwz2B_NbMExB2Jo2aTNs'; // CHRISTIANS API_KEY 
const api_key = 'AIzaSyCbs8r_RDoaoPymB2IUukOxQUkm5nV9YtI'; // PETERS API_KEY


// #################
// TOGGLE USER VALID
// #################

export const toggleUserValid = (isValid: any) => {
    console.log('running toggleUserValid' , isValid)
    return { type: TOGGLE_VALID, payload: isValid }
}


// #############
// RESTORE USER
// #############

export const restoreUser = (user: any, token: any) => {
    console.log('Logging in user:' , user, token)
    return { type: LOGIN, payload: { user, token } };
}

// NOT SURE IF TERMS IS WORKING
export const terms = (checked: any, setChecked: any) => {

    console.log(checked, setChecked)
    return { type: TERMS };
};

// #############
// LOGOUT
// #############
export const logout = (user: any , isValid: any) => {

    SecureStore.deleteItemAsync('userToken',);
    SecureStore.deleteItemAsync('user',);
    SecureStore.deleteItemAsync('expiration',);
    SecureStore.deleteItemAsync('refreshToken',);

    console.log('SecureStore updated successfully!')
    console.log('logout confirmed!');

   

     return async (dispatch: any) => {

        dispatch(toggleUserValid(!isValid));
        dispatch({ type: LOGOUT })
        
        }; 
   

};

// #############
// REFRESH TOKEN
// #############

export const refreshToken = (refreshToken: string) => {
    console.log('Running refreshToken');

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

// #############
// POSTFUNCTIONS
// #############

// #############
// LOGIN
// #############

export const login = (email: string, password: string, isValid: any) => {
    console.log('Running login');
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
        const responseRealtime = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo.json?auth=' + data.idToken, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

        });

        const dataRealtime = await responseRealtime.json();
        let userInfo; 
        console.log("The response" , dataRealtime);
        for (const key in dataRealtime) {
            if (dataRealtime[key].email === email) {
                console.log("user found" , dataRealtime[key])
                userInfo = dataRealtime[key];
            }
        }
        
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {

            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, userInfo.chatToggle, userInfo.eventToggle);
            SecureStore.setItemAsync('userToken', data.idToken);
            SecureStore.setItemAsync('user', JSON.stringify(user));
            let expiration = new Date();
            //token s??ttes en time foran
            expiration.setSeconds(expiration.getSeconds() + parseInt(data.expiresIn));
            SecureStore.setItemAsync('expiration', JSON.stringify(expiration));
            SecureStore.setItemAsync('refreshToken', data.refreshToken);
            dispatch({ type: LOGIN, payload: { user, token: data.idToken, isValid: true } })
            console.log('expiration is:', expiration)
            console.log('dataRealtime:', dataRealtime , 'data.idToken:',data.idToken)
            //dispatch(toggleUserValid(!isValid));
        }

       



    };
};


// #######
// SIGNUP
// #######

export const signup = (email: any, password: any, props: any) => {
    console.log('Running signup');

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
        const responseRealtime = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo.json?auth=' + data.idToken, {
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

        // #############
        // UPDATE ID
        // #############
        // UPDATE ID 

    const realTimeUpdate = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + dataRealtime.name + '/.json?auth=' + data.idToken, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: dataRealtime.name,
      
        
    })
});

const realTimeUpdateAwait = await realTimeUpdate.json();


        console.log(dataRealtime, 'Logging dataRealtime');
        console.log(data);
        if (!response.ok && !responseRealtime.ok) {
            //There was a problem..
        } else {
            console.log('Inside else part of function: signup');
            const user = new User(realTimeUpdateAwait.id, '', '', '', email, '', 'false', false);
            SecureStore.setItemAsync('userToken', data.idToken);
            SecureStore.setItemAsync('user', JSON.stringify(user));
            let expiration = new Date();
            //token s??ttes en time foran
            expiration.setSeconds(expiration.getSeconds() + parseInt(data.expiresIn));
            SecureStore.setItemAsync('expiration', JSON.stringify(expiration));
            SecureStore.setItemAsync('refreshToken', data.refreshToken);
            console.log('expiration is:', expiration)
            console.log('refresh token is:', data.refreshToken)
            dispatch({ type: SIGNUP, payload: { user, token: data.idToken } })
            props.navigation.navigate('OnboardUserinfoScreen') // working
        }
    };
};



// ###########################
// UPDATE USER ONBOARDING FLOW
// ###########################

export const updateUser = (fullName: string, studyProgramme: string, userInfo: any, isValid: any, props: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateUser');
    console.log(fullName, studyProgramme, userInfo, isValid);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: fullName,
                studyProgramme: studyProgramme,
                
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(isValid);
            props.navigation.navigate('NOTIFICATIONS') // working
            const user = new User(userInfo.id, fullName, userInfo.lastname, userInfo.imageUrl, userInfo.email, studyProgramme, userInfo.chatToggle, userInfo.eventToggle);
            SecureStore.setItemAsync('user', JSON.stringify(user));
            dispatch({type: UPDATE_SIGNUP_INFORMATION, payload: user })
        }
    };
};

// ###########################
// UPDATE NOTIFCATIONS 
// ###########################

export const updateNotifications = (userInfo: any, props: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateNotifications');
    console.log(userInfo);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatToggle: true,
                eventToggle: true,
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, true, true);
            //SecureStore.setItemAsync('user', JSON.stringify(user));
            SecureStore.setItemAsync('user', JSON.stringify(user));
            dispatch({type: EVENT_NOTIFICATIONS_TOGGLE, payload: user })
            dispatch({type: CHAT_NOTIFICATIONS_TOGGLE, payload: user })
            props.navigation.navigate('ONBOARDINGSCREEN1') // working
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// #############################################
// UPDATE Going and Interested FROM DB FUNCTIONS
// #############################################

// ###########################
// UPDATE GOING USER
// ###########################

export const updateGoingUser = (eventId: any, user: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateGoingUser');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/goingUsers.json?auth=' + token, {
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

            //console.log(isValid);
            //dispatch(toggleUserValid(!isValid));
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// ###########################
// UPDATE INTERESTED USER
// ###########################

export const updateInterestedUser = (eventId: any, user: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateInterestedUser');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/interestedUsers.json?auth=' + token, {
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
            

            //console.log(isValid);
            //dispatch(toggleUserValid(!isValid));
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// ########################
// DELETE FROM DB FUNCTIONS
// ########################

export const updateDeleteInterestedUser = (eventId: any, user: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateDeleteInterestedUser');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/interestedUsers.json?auth=' + token, {
            method: 'DELETE',
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
            console.log('interestedUserDeleted');
            SecureStore.setItemAsync('user', JSON.stringify(user));

            //console.log(isValid);
            //dispatch(toggleUserValid(!isValid));
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// ###########################
// UPDATE DELETE GOING USER
// ###########################

export const updateDeleteGoingUser = (eventId: any, user: any) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running updateDeleteGoingUser');
    console.log(eventId, user)
    return async (dispatch: any, getState: any) => { // redux thunk

        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/events/' + eventId + '/goingUsers.json?auth=' + token, {
            method: 'DELETE',
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
            console.log('goingUserDeleted');
            SecureStore.setItemAsync('user', JSON.stringify(user));

            //console.log(isValid);
            //dispatch(toggleUserValid(!isValid));
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// CHAT TOGGLE 
// ###########################
// TOGGLE CHAT NOTIFICATIONS
// ###########################

export const toggleChatNotification = (userInfo: any, setNotificationsBoolean: boolean) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running toggleChatNotification');
    console.log(userInfo);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatToggle: !setNotificationsBoolean,
                
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, !setNotificationsBoolean, userInfo.eventToggle);
            //SecureStore.setItemAsync('user', JSON.stringify(user));
            SecureStore.setItemAsync('user', JSON.stringify(user));
            dispatch({type: CHAT_NOTIFICATIONS_TOGGLE, payload: user })
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

// EVENT TOGGLE
// ###########################
// TOGGLE EVENT NOTIFICATIONS
// ###########################

export const toggleEventNotification = (userInfo: any, setNotificationsBoolean: boolean) => {
    // console.log(name, studyProg, token);
    // console.log(email + " " + password);
    console.log('Running toggleEventNotification');
    console.log(userInfo);
    return async (dispatch: any, getState: any) => { // redux thunk


        const token = getState().user.token;
        // console.log("again" + email + " " + password);
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/userinfo/' + userInfo.id + '/.json?auth=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventToggle: !setNotificationsBoolean,
                
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
            console.log(response);
        } else {
            console.log(userInfo);
            const user = new User(userInfo.id, userInfo.firstname, userInfo.lastname, userInfo.imageUrl, userInfo.email, userInfo.studyProgramme, userInfo.chatToggle, !setNotificationsBoolean);
            //SecureStore.setItemAsync('user', JSON.stringify(user));
            SecureStore.setItemAsync('user', JSON.stringify(user));
            dispatch({type: EVENT_NOTIFICATIONS_TOGGLE, payload: user })
           
            //     const user = new User(data.localId, data.firstname, '', '', email, data.studyProg);
            //    dispatch({type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};