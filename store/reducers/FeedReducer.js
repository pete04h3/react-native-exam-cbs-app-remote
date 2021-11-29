import Feed from "../../models/Feed";
import { FETCH_FEED } from "../actions/FeedAction";

const initialState = {
    feed: [] // new array
};

const FeedReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case FETCH_FEED: 
            return {...state, feed: action.payload };

    default:
        return state;
    }
}

export default FeedReducer;