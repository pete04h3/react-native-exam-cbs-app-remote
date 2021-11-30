import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleUserValid } from './../store/actions/UserActions'
import { updateUser } from './../store/actions/UserActions'
import User from "../models/User";
import { useState } from 'react';
import { onChange } from 'react-native-reanimated';


const OnboardUserinfoScreen = props => {
    
  // To dispatch an action
    const dispatch = useDispatch();
    
    //useSelector() that extracts the data from the store. 
    const userInfo = useSelector(state => state.user.loggedInUser ); // the subscription
  
    // useState() - Declares new state variable
    const [fullName, onChangeName] = useState('');
    const [studyProg, onChangeStudyprog] = useState('');
    
    //dispatch the action
    const handleOnboardingUser = () => {
        dispatch(updateUser(fullName, studyProg, userInfo, props))}
        console.log(props.navigation);


 return (
     <View style={styles.container}>

      {/* <Text>Is User done with onboarding? {String(isValid)}</Text>       */}

     <View style={styles.imgWrap}>
     </View>
     <View style={styles.headLineWrapper}><Text style={styles.headLine}>Before we start...</Text></View>

     <View style={styles.profileimgcontainer}>
     <Image style={styles.profileimg} source={require('../assets/default-profile-image.png')}/>
     

     <TouchableOpacity>
     <Text style={styles.placeHolder}>Profile picture</Text>
       <View style={styles.smallbutton}>
         <Text style={styles.buttonText}>Upload</Text>
       </View>
     </TouchableOpacity>
     </View>

   <View style={styles.wrapper}>

   <View style={styles.wrapperInline}>
       <Text style={styles.placeHolder}>What is your name?</Text>
       <View style={styles.infoIcon}>
       <TextInput placeholder="First name and last name" label="Name" style={styles.textInput} keyboardType="email-address" onChangeText={onChangeName} value={fullName} />
       </View>
   </View>

       <View style={styles.wrapperInline}>
       <Text style={styles.placeHolder}>Study program</Text>
       <TextInput placeholder="Study program" label="Study" style={styles.textInput} onChangeText={onChangeStudyprog} value={studyProg} />
       </View>

 </View>


 <TouchableOpacity onPress={handleOnboardingUser}>
       <View style={styles.button}>
         <Text style={styles.buttonText}>Next</Text>
       </View>
     </TouchableOpacity>


 </View>
 );
}

// STYLING

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'white',
  
    },
  
    infoIcon: {
      flexDirection: 'row',
    },
  
    imgWrap: {
        width: 133,
        marginTop: 40,
        marginBottom: 20,
        
    },
  
    wrapper: {
        backgroundColor: 'white',
        width: 300,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        marginBottom: 20,
    },
  
    wrapperInline: {
        backgroundColor: 'transparent',
        borderColor: '#EEEEEE',
        borderStyle: 'solid',
        borderWidth: 1,
        shadowColor: '#AAAAAA29',
        width: 300,
        height: 70,
    },
  
    button: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        width: 300,
        backgroundColor: '#5050A5',
        color: 'snow',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      smallbutton: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        width: 140,
        backgroundColor: '#5050A5',
        color: 'snow',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
  
      buttonText: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        padding: 10,
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16,
        
        
      },
      headLine: {
          textAlign: 'left',
          color: '#32305D',
          fontSize: 26,
          fontWeight: 'bold',
          marginBottom: 40,
          fontFamily: "Teko",
          width: 300
          
      },
  
      textInput : {
        borderWidth: 1,
        padding: 10,
        width: 298,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
       
    },
  
    errorMsg : {
        color: "red",
        margin: 12,
        marginTop: 1,
    },
  
    placeHolder : {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 12,
        color: '#32305D',
        textTransform: 'uppercase',
        paddingHorizontal: 12,
        marginTop: 10,
  
    },
    profileimgcontainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 30
    },

    profileimg: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: -5,
    },
  
    
  });
export default OnboardUserinfoScreen;