import Event from "../../models/Events";
import { FETCH_FEED } from "../actions/FeedAction";

const initialState = {
    events: [] // new array
};

const FeedReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case FETCH_FEED: 
            return {...state, events: action.payload };

    default:
        return state;
    }
}

export default FeedReducer;