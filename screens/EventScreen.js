import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import defaultStyles from './../GeneralStyles';;
import { updateGoingUser } from '../store/actions/UserActions';
import UserGoingInterested from '../models/UserGoingInterested';
import { updateInterestedUser } from '../store/actions/UserActions';


const EventScreen = props => {
   
   const { id } = props.route.params;
   const singleEvent = useSelector(state => state.event.events).find(singleEvent => singleEvent.eventId === id); // state is defined // event: EventReducer in app.js // Initialstate events: []
   const eventId = singleEvent.eventId
   const userEmail = useSelector(state => state.user.loggedInUser?.email );
   console.log(userEmail);
   const dispatch = useDispatch(); // helps to dispatch an action

   const user = new UserGoingInterested(userEmail);

   const handleGoingUser = () => {
      dispatch(updateGoingUser(eventId, user));
   };
   
   const handleInterestedUser = () => {
      dispatch(updateInterestedUser(id, user));

   };
   
   return (

      <View style={styles.container}>
          <Image
          style={styles.tinyLogo}
          // source={props.event.imageUrl}/>
          source={require('./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png')}/>
          <Text> {singleEvent.eventName} </Text>
          <Button title="Going" onPress={handleGoingUser}/>
          <Button title="Interested" onPress={handleInterestedUser}/>
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

export default EventScreen;