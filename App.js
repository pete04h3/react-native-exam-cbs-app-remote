import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import EventReducer from './store/reducers/EventReducer';
import FeedReducer from './store/reducers/FeedReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Navigation from './components/Navigation';


const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  event: EventReducer,
  feed: FeedReducer,
  //posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  

  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
