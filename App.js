import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import EventReducer from './store/reducers/EventReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Navigation from './components/Navigation';

//Spliting reducing function into separate functions,
//each managing independent parts of the state.
const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  event: EventReducer,
});

//rootReducer: Passes reducers to redux createStore function and 
//applyMiddleware(ReduxThunk) allows us to write redux actions with asynchronous code (backend call)
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  
  return (
    
    // Redux store is available to all our components
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
