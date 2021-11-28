import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import defaultStyles from './../GeneralStyles';;

const EventScreen = props => {
   
   const { id } = props.route.params;
   const singleEvent = useSelector(state => state.event.events).find(singleEvent => singleEvent.eventId === id); // state is defined // event: EventReducer in app.js // Initialstate events: []
   console.log(singleEvent.eventName);
   // const chatMessages = useSelector(state => state.chat.chatRooms).find(room => room.chatRoomId === id).messages;

   return (

      <View style={styles.container}>
      <View style={styles.section1}>
<View style={styles.banner}>

<Text style={styles.bannerTxt}>Part of collection</Text> 
<Text style={styles.eventSubline3White}>{singleEvent.eventType}</Text>

<TouchableOpacity style={styles.mediumBox} >
<Text style={styles.eventSubline2White}>See collection</Text>
</TouchableOpacity> 

</View>
          <Image
          style={styles.bannerImg}
          // source={props.event.imageUrl}/>
          source={require('./../assets/singleeventpic.png')}/>
          <Text style={styles.eventHeadline}> {singleEvent.eventName} </Text>
          <Text style={styles.eventTime}> <Image style={styles.tinyLogo}  source={require('./../assets/alarm-clock-black.png')}/>    {singleEvent.eventTime} </Text>
          <Text style={styles.eventLocation}> <Image style={styles.tinyLogoLocation} source={require('./../assets/marker-black.png')}/>    {singleEvent.eventLocation} </Text>
      
      <View style={styles.midSection} >

      <Image
          style={styles.mediumLogo}
          // source={props.event.imageUrl}/>
          source={require('./../assets/logo.png')}/> 
         <View style={styles.eventTxtWrap}>
         <Text style={styles.eventSubline}> CBS Students </Text>
         <Text style={styles.eventSubline2}> View page </Text>
        
         </View>

         <View style={styles.blueMsgBox}>

         <Image
          style={styles.ChatIcon}
          // source={props.event.imageUrl}/>
          source={require('./../assets/chat-icon-events.png')}/>  
            
         </View>
   
          


      </View>

      <View style={styles.flexBox}>

      <Image
          style={styles.tinyLogoStar}
          // source={props.event.imageUrl}/>
          source={require('./../assets/eventstar.png')}/> 
      <TouchableOpacity style={styles.intBtn} /* onPress={ () => props.navigation.navigate('MENU')} */ >
   
      <Text style={styles.eventBtnText}> Interested </Text>
         
      </TouchableOpacity> 

      <Image
          style={styles.tinyLogoCalender}
          // source={props.event.imageUrl}/>
          source={require('./../assets/eventcalender.png')}/> 

      <TouchableOpacity style={styles.goingBtn} /* onPress={ () => props.navigation.navigate('MENU')} */ >
   
      <Text style={styles.eventBtnTextGoing}> Going </Text>
         
      </TouchableOpacity> 
      </View>
      <View style={styles.sectionWrapper}>
      <Text style={styles.blackDot}>.</Text>
      <View style={styles.flexBoxIcons}>
      <Image
          style={styles.tinyLogoBlackCalender}
          // source={props.event.imageUrl}/>
          source={require('./../assets/blackstar.png')}/> 
    <Text style={styles.eventSubline2BlackInt}>145 Interested</Text>

      <Image
          style={styles.tinyLogoBlackStar}
          // source={props.event.imageUrl}/>
          source={require('./../assets/blackcalender.png')}/> 
           <Text style={styles.eventSubline2Black}>35 Going</Text>
      </View>
      </View>
      </View>
      
      
      
      
      
      </View>
      
      
 
 );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
   },

   blueMsgBox: {
      width: 37,
      height: 37,
      backgroundColor: '#5050A5',
      alignSelf: 'flex-end',
      marginLeft: 150,
      marginBottom: 7.5,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
          },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

   },

   sectionWrapper: {
      marginTop: -25,
   },

   smallFlex: {
      flexDirection: 'column'
   },

   blackDot: {
      fontSize: 40,
      alignSelf: 'center',
      
   },

   eventTxtWrap: {
      flexDirection: 'column',
   },

   bannerImg: {
      width: 375,
      height: 164,
   },

   flexBox: {
      flexDirection: 'row',
      alignSelf: 'center',
      margin: 5,
      
      
   },

   flexBoxIcons: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: -20,
      marginBottom: 20,
      marginRight: 20,
     paddingRight: 20,
     paddingLeft: 20,

     
  
   },

   intBtn: {
      borderColor: '#5050A5',
      borderWidth: 1,
      width: 150,
      height: 37,
      margin: 15,
      borderRadius: 5,
   },

   goingBtn: {
      borderColor: '#5050A5',
      borderWidth: 1,
      width: 150,
      height: 37,
      margin: 15,
      borderRadius: 5,
   },





   section1: {
      backgroundColor: 'white',
   },


   midSection: {
      borderWidth: 1,
      borderColor: '#EEEEEE',
      borderRadius: 6,
      width: 333,
      height: 54,
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 10,
      flexDirection: 'row',
   },


   smallBox: {
    backgroundColor: '#47456E',
    height: 40,
    width: 40,
    justifyContent: 'center',
    marginTop: 12,
    marginLeft: 45,
    borderRadius: 5,
   },

   mediumBox: {
      backgroundColor: '#47456E',
      height: 40,
      width: 122,
      justifyContent: 'center',
      marginTop: 12,
      marginLeft: 150,
      borderRadius: 5,
     },

   mediumLogo: {
      width: 34,
      height: 36,
      marginTop: 8,
      margin: 10,
   },

   ChatIcon: {
      width: 20,
      height: 19,
      marginTop: 10,
      margin: 10,
      alignSelf: 'center',
   },

   tinyLogo: {
      width: 12,
      height: 12,
    
   },

   tinyLogoBlackCalender: {
      width: 13.68,
      height: 13,
      marginRight: 8,
      alignSelf: 'center',
    
   },

   tinyLogoBlackStar: {
      width: 13.68,
      height: 13,
      alignSelf: 'center',
      marginLeft: 33,
    
   },
   

   tinyLogoCalender: {
      width: 13.68,
      height: 13,
      position: 'absolute',
      marginLeft: 210,
      marginTop: 28,
      
   },

   tinyLogoStar: {
      width: 13.68,
      height: 13,
      position: 'absolute',
      marginLeft: 30,
      marginTop: 28,
   },

   tinyLogoLocation: {
      width: 12,
      height: 17,
   },

   banner: {
    backgroundColor: '#32305D',
    height: 64,
    width: 375,
    flexDirection: 'row',
    marginTop: 0,
   },

   eventHeadline: {
      fontSize: 26,
      fontFamily: 'Teko',
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      marginLeft: 19,
      marginTop: 20,
   },

   eventBtnText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#5050A5',
      marginTop: 8,
      marginRight: 0,
      alignSelf: 'center',
      textAlign: 'left'
   },

   eventBtnTextGoing: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#5050A5',
      marginTop: 8,
      marginRight: 30,
      alignSelf: 'center',
      textAlign: 'left'
   },


   eventSubline: {
      fontSize: 16,
      fontFamily: 'Teko',
      color: 'black',
      marginTop: 10,
     
   },

   eventSubline2: {
      fontSize: 12,
      color: '#AAAAAA',
      marginTop: -3,
     
   },

   eventSubline3White: {
      fontSize: 12,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 35,
      marginLeft: -110,
      paddingVertical: -10,
   
   },

   eventSubline2Black: {
      fontSize: 12,
      color: 'black',
      marginLeft: 10,
      fontWeight: 'bold',
     
   },

   eventSubline2White: {
      fontSize: 12,
      color: 'white',
      marginLeft: 0,
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
   },

   eventSubline2BlackInt: {
      fontSize: 12,
      color: 'black',
      marginRight: 20,
      fontWeight: 'bold',
     
   },

 

   eventTime: {
      fontSize: 16,
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      marginLeft: 19,
      fontWeight: 'bold',
      
   },

   eventLocation: {
      fontSize: 16,
      color: 'black',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      marginLeft: 19,
   },

   bannerTxt: {
    color: '#BABADD',
    textTransform: 'uppercase',
    fontFamily: 'Teko',
    textAlign: 'left',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 14,
    fontWeight: 'bold',
   },

   flex: {
      flexDirection: 'row',
      
   },

   buttonCreate: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 4,
      elevation: 3,
      width: 200,
      backgroundColor: 'greenyellow',
      
    },

    buttonDelete: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 4,
      elevation: 3,
      width: 200,
      backgroundColor: 'red',
      
    },

    buttonText: {
      textAlign: 'center',
      justifyContent: 'center',
      padding: 10,
      color: 'snow',
      textTransform: 'uppercase',
      fontWeight: 'bold',  
    },

    buttonTextBlack: {
      textAlign: 'center',
      justifyContent: 'center',
      padding: 10,
      color: 'black',
      textTransform: 'uppercase',
      fontWeight: 'bold',  
    },
   
});

export default EventScreen;