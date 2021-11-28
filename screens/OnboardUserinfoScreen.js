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

    // DISPATCH
    const dispatch = useDispatch(); // helps to dispatch an action
    // VALID
    const isValid = useSelector(state => state.user.isValid) // the subscription
    // const loggedInUser = useSelector(state => state.user.loggedInUser).token;
    const token = useSelector(state => state.user.token);
    
    console.log(token);
    const [fullName, onChangeName] = useState('');
    const [studyProgramme, onChangeStudyprog] = useState('');

    
    const userInfoId = useSelector((state) => state.user.loggedInUser?.id );

    console.log('User', userInfoId)
  
    /*      const userInfo = useSelector((state:any) => state.user.loggedInUser);
  
         console.log('vi kigger efter den her',userInfo) */
  
    const handleOnboardingUser = () => {
  
      dispatch(updateUser(fullName, studyProgramme, userInfoId, isValid, props));
  
      //dispatch(toggleUserValid(!isValid))
  
      // skifter fortegnet på boolean. action creater toggle happy.
  
    }
    // const changeProfileImage = () => {
    //    props.src = '../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png'; // not working
    // }
 return (
     <View style={styles.container}>

{/* <Text>Is User done with onboarding? {String(isValid)}</Text>    */}   
       {/* <Button title="Flip user done" onPress={handleOnboardingUser} /> */}
       

     <View style={styles.imgWrap}>
     <Image style={styles.mediumLogo} source={require('../assets/logo.png')}/>
     </View>
     <View style={styles.headLineWrapper}><Text style={styles.headLine}>Before we start...</Text></View>
     <Text style={styles.placeHolderProfileHeader}>Profile picture</Text>
     <View style={styles.profileimgcontainer}>
       <View style={styles.border}>
     <Image style={styles.profileimg} source={require('../assets/default-profile-image.png')}/>
     </View>

     <TouchableOpacity>
     
       <View style={styles.smallbutton}>
         <Text style={styles.buttonText}>Upload</Text>
       </View>
     </TouchableOpacity>
     </View>

   <View style={styles.wrapper}>

   <View style={styles.wrapperInline}>
       <Text style={styles.placeHolder}>What is your name?</Text>
       <View style={styles.infoIcon}>
       <TextInput required placeholder="First name and last name" label="Name" style={styles.textInput} keyboardType="email-address" onChangeText={onChangeName} value={fullName} />
       </View>
   </View>
   </View>
   <View style={styles.wrapper}>
       <View style={styles.wrapperInline}>
       <Text style={styles.placeHolder}>Study program</Text>
       <TextInput placeholder="Study program" label="Study" style={styles.textInput} onChangeText={onChangeStudyprog} value={studyProgramme} />
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
         marginTop: -40,
  
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

    placeHolderProfileHeader : {
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'flex-start',
      fontSize: 12,
      color: '#32305D',
      textTransform: 'uppercase',
      paddingHorizontal: 12,
      marginTop: 0,
      margin: 7,
      marginLeft: 28,

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
    marginBottom: 30,
    borderRadius: 5,
    },

    profileimg: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 4,
        marginBottom: 6,
        marginLeft: 4,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: 'white',
      
        
    },

    border: {
      width: 90,
      height: 90,
      borderRadius: 100,
      marginTop: -28,
      borderWidth: 1,
      borderRadius: 100,
      borderColor: 'lightgrey',
    },
  
    
  });
export default OnboardUserinfoScreen;