import Feed from "../../models/Feed";

export const FETCH_FEED = 'FETCH_FEED';

export const fetchFeed = () => {
    return async (dispatch, getState) => { // redux thunk
        const token = getState().user.token; // accessing token in the state.

                                    // Find this link for YOUR firebase, in the "Realtime Database"-tab in the firebase console
                                    // You must use YOUR link and not this link, to save data in your database and not mine.
        const response = await fetch('https://kvaliapp-baa85-default-rtdb.europe-west1.firebasedatabase.app/feeds.json?auth=' +  token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
  
        const data = await response.json(); // json to javascript
        console.log(data);

        let feed = [];
        for(const key in data) {
            
            feed.push(new Feed(key, data[key].feedName, data[key].imageUrl, data[key].feedType, data[key].feedTime, data[key].feedLocation));
        }

        if (!response.ok) {
            //There was a problem..
        } else {
            // do something?
            dispatch({ type: FETCH_FEED, payload: feed })
        }
    };
};