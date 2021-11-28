import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Events from '../components/Events';

import { fetchEvents } from './../store/actions/EventAction';
import defaultStyles from './../GeneralStyles';

const HomeScreen = props => {

   const events = useSelector(state => state.event.events); // state is defined // event: EventReducer in app.js // Initialstate events: []
   
   const dispatch = useDispatch(); // helps to dispatch an action

   const isValid = useSelector((state) => state.user.isValid)
   React.useEffect(() => {
    console.log('User account is set to', isValid);
  }, [isValid]); 

   React.useEffect(() => { // peform side effects inside funtion
      console.log("fetching events");
      dispatch(fetchEvents()); // fetch events from EventsActions.js
   }, []);

   

   return (
      <View style={styles.container} >


       
          <View>
          <FlatList
            data={events}
            renderItem={itemData => (
                <Events event={itemData.item}></Events>
            )}
            keyExtractor={item => item.eventId}
        />
        
        </View>

        
      </View>

      
 );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },

   flatListWrapper: {
      width: 300,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'red',
   },
   
});

export default HomeScreen;





