import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// DISPATCH
import { useDispatch } from 'react-redux';
// IMAGE
import OnboardingImage2 from '../components/OnboardingImage2';
// BUTTONS 
import { TouchableOpacity } from 'react-native-gesture-handler';

const OnboardingScreen2 = props => {

       // dispatch
       const dispatch = useDispatch();

          // useState  
    const [someThing, someThingElse] = useState(''); // lift up

       const handleNotifications = () => {
           dispatch(notifications(someThing, someThingElse)); // not working
       }
   
 return (
    <View style={styles.container}>

      <View style={styles.imgWrap}>
        <OnboardingImage2 />
        </View>

      <View style={styles.containerWrap}>
        <View style={styles.headLineWrapper}>
        <Text style={styles.inLine} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</Text>
        </View>

        


       

        <TouchableOpacity onPress={ () => props.navigation.navigate('ONBOARDINGSCREEN3') }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
        </View>






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

    containerWrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', 
      marginTop: 272,
      


 },

    inLine: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#707070',
        fontSize: 16,
        fontWeight: 'normal',
        marginRight: 0,
        width: 300,
        marginTop: 10,
        marginBottom: 30
       

    
    },

    imgWrap: {
        width: 300,
        height: 200,
        marginTop: 0,
        marginBottom: 0,
        
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        width: 337,
        height: 61,
        marginTop: 0,
        backgroundColor: 'rgba(80, 80, 165, 1)',
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
        textTransform: 'none',
        fontWeight: 'bold',
        
        
      },

      laterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        width: 300,
        marginTop: 30,
        backgroundColor: 'rgba(51, 51, 51, 0.1)',
        color: 'snow',
      },

      laterButtonText: {
        textAlign: 'left',
        justifyContent: 'center',
        padding: 10,
        color: 'black',
        textTransform: 'none',
        fontWeight: 'bold',
        
        
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
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#32305D',
          fontSize: 32,
          fontWeight: 'normal',
          marginRight: 0,
          marginBottom: 0,
          fontFamily: "TekoRegular",

          
      },

      headLineWrapper: {
        justifyContent: 'center',
        alignItems: 'center',

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

export default OnboardingScreen2;