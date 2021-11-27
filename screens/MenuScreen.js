import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Switch, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from './../store/actions/UserActions';

import { toggleUserValid } from './../store/actions/UserActions';

// IMAGE COMP
import ImagesAvatar from './../components/imageAvatar';

// LINE SEPERATOR 
import Line from './../components/Line';

const MenuScreen = props => {
   const dispatch = useDispatch();
   // const [changeName, setChangeName] = useState(profileInfo.name);
   // const [nameValid, setNameValid] = useState(false);

   // SWITCH TOGGLERS // one for chats and one for events.
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const [isEventEnabled, setEventIsEnabled] = useState(false);
   const toggleEventSwitch = () => setEventIsEnabled(previousState => !previousState);
   
   // VALID
   const isValid = useSelector(state => state.user.isValid) // the subscription
   
   const isnotvalid = () => {
   dispatch(toggleUserValid(!isValid)) // skifter fortegnet på boolean. action creater toggle happy.
   }
   
   return (
      <View style={styles.container}>
         
      <View style={styles.imgWrap}>

        <ImagesAvatar  />

        <View style={styles.headLineWrapper}>
           <Text style={styles.headLine}>Robert Jacobsen</Text>
           <Text style={styles.inLine}>roja20zz@student.cbs.dk</Text>
           <Text style={styles.inLine}>web development</Text>
        </View>
      </View>

        <TouchableOpacity onPress={() => dispatch(editProfile())}> 
          <View style={styles.buttonEditProfile}>
            <Text style={styles.EditProfileButtonText}>Edit profile</Text>
          </View>
        </TouchableOpacity>

        <Line />

        <View style={styles.headLineWrapper}>
           <Text style={styles.NotifcationsHeadLine}>Notifications</Text>
        </View>

        
      <View style={styles.chatWrapper}>
        <View style={styles.switchWrapper}>

           <Switch 
                 style={styles.switch}
                 trackColor={{ false: "#AAAAAA", true: "#BABADD" }} 
                 thumbColor={isEnabled ? "#5050A5" : "#F5F5F5"}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleSwitch}
                 value={isEnabled} />

                 
        <View style={styles.flex}>   
            <Text style={styles.placeHolder}>Chat</Text>
            <Text style={styles.txtInLine}>When you receive a new message</Text>
        </View>

        </View>
      </View>

        
        <View style={styles.eventWrapper}>

        <View style={styles.switchWrapper}>

<Switch 
      style={styles.eventSwitch}
      trackColor={{ false: "#AAAAAA", true: "#BABADD" }} 
      thumbColor={isEventEnabled ? "#5050A5" : "#F5F5F5"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleEventSwitch}
      value={isEventEnabled} />

      
<View style={styles.flex}>   
 <Text style={styles.placeHolder}>Event reminder</Text>
 <Text style={styles.txtInLine}>An hour before events you are ‘going to’</Text>
</View>

</View>
          
      
        </View>
        

        <Line />

         <TouchableOpacity  onPress={() => dispatch(logout(), isnotvalid())} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log out</Text>
          </View>
        </TouchableOpacity>

      </View>
   );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5F5F5',    

    },

    flex: {
      flexDirection: 'column',
      
    },

 

    switchWrapper: {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
        
      
    },

    switch: {

      marginTop: 20,
      marginLeft: 50,

    },

    eventSwitch: {
      marginTop: 20,
      marginLeft: 15,
    },

    placeHolder : {
     marginTop: 15,
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 16,
      color: 'black',
      textTransform: 'uppercase',
      
    },

    imgWrap: {
        width: 300,
        marginTop: 30,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingVertical: 10, //change for button to go up and down
        
    },

    chatWrapper: {
      backgroundColor: 'white',
      width: 337,
      height: 72,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
          },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      margin: 12,
      
   
    }, 

    eventWrapper: {
      backgroundColor: 'white',
      width: 337,
      height: 72,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
          },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 5,
      margin: 12,
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
        height: 239,
        borderRadius: 5,
        marginBottom: 40,
    },

    wrapperInline: {
        backgroundColor: 'transparent',
        borderColor: '#EEEEEE',
        borderStyle: 'solid',
        borderWidth: 1,
        shadowColor: '#AAAAAA29',
        width: 300,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderRadius: 5,
        elevation: 3,
        width: 337,
        height: 70,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 50,
        
      },

      buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
        color: 'darkblue',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 26,
        
        
      },

      buttonEditProfile: {
         alignItems: 'center',
         justifyContent: 'center',
         paddingHorizontal: 4,
         borderRadius: 5,
         width: 336,
         height: 37,
         backgroundColor: '#5050A5',
         shadowColor: "#000",
         shadowOffset: {
            width: 0,
            height: 2,
             },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5,
         marginTop: 10,
         marginBottom: 30,

      },

      EditProfileButtonText: {
         textAlign: 'center',
         justifyContent: 'center',
         padding: 10,
         color: 'snow',
         textTransform: 'uppercase',
         fontWeight: 'bold',
         fontSize: 16,
         
         
       },

      accountButton: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 15,
          paddingVertical: 12,
          

      },

      accountButtonText: {

        color: '#5050A5',
        fontWeight: 'bold',
        marginLeft: 6,

      },

      accountText: {
        color: '#5050A5',

    },

      headLine: {
          flex: 0,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          textAlign: 'left',
          color: '#32305D',
          fontSize: 26,
          fontWeight: 'bold',
          marginRight: 90,
          marginTop: 10,
         
          
      },

      NotifcationsHeadLine: {
         justifyContent: 'flex-end',
         alignItems: 'flex-start',
         textAlign: 'left',
         color: '#32305D',
         fontSize: 26,
         fontWeight: 'bold',
         marginRight: 90,
         marginBottom: 20,
         width: 240,
         textTransform: 'uppercase',

      },

      inLine: {
         flex: 0,
         justifyContent: 'flex-end',
         alignItems: 'flex-start',
         textAlign: 'left',
         color: '#32305D',
         fontSize: 12,
         fontWeight: 'normal',
         marginRight: 90,
         
         
         
     },

     
     txtInLine: {
      flex: 0,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      textAlign: 'left',
      color: '#32305D',
      fontSize: 12,
      fontWeight: 'normal',
      marginRight: 0,
      marginBottom: 20,
      
      
  },


      smallLine: {
         justifyContent: 'center',
         textAlign: 'left',
         flexDirection: 'column',
      },

      headLineWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 1,

      },

      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
       
      },


      checkboxWrapper: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,

      },

      checkbox: {
        marginBottom: 16
      },

      termsLabel: {
        textTransform: 'none',
        color: '#32305D',
        borderStyle: 'solid',
        textDecorationLine: 'none',
        fontSize: 12,
      },

      termsText: {
          textTransform: 'lowercase',
          color: '#32305D',
          borderStyle: 'solid',
          textDecorationLine: 'underline',
          fontSize: 12,
          
          
         
      },

     
    

    
 });

export default MenuScreen;