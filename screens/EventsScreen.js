import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Events from '../components/Events';

import {fetchEvents } from './../store/actions/EventAction';
import defaultStyles from './../GeneralStyles';

const EventsScreen = props => {

   const events = useSelector(state => state.event.events); // state is defined // event: EventReducer in app.js // Initialstate events: []
   
   const dispatch = useDispatch(); // helps to dispatch an action

   React.useEffect(() => { // peform side effects inside funtion
      console.log("fetching events");
      dispatch(fetchEvents()); // fetch events from EventsActions.js
   }, []);

   

   return (
      <View style={styles.container}>
          
          <FlatList
            data={events}
            renderItem={itemData => (
                <Events event={itemData.item}></Events>
            )}
            keyExtractor={item => item.eventId}
        />
      </View>
 );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },
   
});

export default EventsScreen;