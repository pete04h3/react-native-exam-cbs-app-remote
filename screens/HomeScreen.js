import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Feed from '../components/Feed';
import { fetchFeed } from './../store/actions/FeedAction';
import defaultStyles from './../GeneralStyles';

const HomeScreen = props => {
   const isValid = useSelector(state => state.user.isValid);
   const userEmail = useSelector(state => state.user.loggedInUser?.email );
   const feeds = useSelector(state => state.feed.feed); // state is defined // feed: FeedReducer in app.js // Initialstate feed: []
   const dispatch = useDispatch(); // helps to dispatch an action
   console.log('Signup flow complete, user:', userEmail, 'completed onboarding');
   console.log('Logging in user' , userEmail);
   console.log('isValid status:', isValid);

   React.useEffect(() => { // peform side effects inside funtion
      console.log("fetching feed");
      dispatch(fetchFeed()); // fetch feed from FeedActions.js
   }, []);

  



   return (
      <View style={styles.container} >

       
          <View>
          <FlatList
            data={feeds}
            renderItem={itemData => (
                <Feed feed={itemData.item}></Feed>
            )}
            keyExtractor={item => item.feedId}
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