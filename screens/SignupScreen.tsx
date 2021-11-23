import React, { useState } from 'react';
import { View,  Text, Image, Button, StyleSheet, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';

// DISPATCH
import { useDispatch } from 'react-redux';
// SIGNUP ACTION
import { signup } from '../store/actions/UserActions';
// INPUT COMP
import Input from './../components/Input';
// IMAGE COMP
import ImagesExample from './../components/ImageExample'
// SCREENS
import Navigation from '../components/Navigation';
import LoginScreen from './../screens/LoginScreen';
// BUTTONS 
import { TouchableOpacity } from 'react-native-gesture-handler';





const SignupScreen = (props: any) => {

    //Checkbox 
    

  /*   const [checked, setChecked] = useState(true);
    React.useEffect(() => {
      console.log('Its works great!!', checked);
    }, [checked]); */

     // useState  
    const [changeName, setChangeName] = useState(''); // lift up
    const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
   
    //const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [confirmPassword, onChangeConfirmPassword] = useState("");

    // dispatch
    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(signup(changeName, password)); // working
    }


    const acceptTerms = () => {
        dispatch(signup(changeName, password)); // not working
    }

   
// RETURN SIGNUP VIEW 

    return (
 
    <View style={styles.container}>

        <View style={styles.imgWrap}>
        <ImagesExample />
        </View>



        <View style={styles.headLineWrapper}><Text style={styles.headLine}>Sign up to get access</Text></View>
        
    <View style={styles.wrapper}>

        
        <View style={styles.wrapperInline}>
        <Input
            label="E-mail"
            error="Please fill out your username"
            text={changeName} nameValid={nameValid}
            onValid={ (valid: any) => setNameValid(valid)}
            setContent={ (content: any) => setChangeName(content)}/>
        </View>
        <View style={styles.wrapperInline}>
        <Input
            label="Password"
            error="Please fill out your password"
            text={password} nameValid={nameValid}
            onValid={ (valid: any) => setNameValid(valid)}
            setContent={ (content: any) => onChangePassword(content)}/>
        </View>
        <View style={styles.wrapperInline}>
         <Input
            label="Repeat Password"
            error="Password dosn't match"
            text={confirmPassword} nameValid={nameValid}
            onValid={ (valid: any) => setNameValid(valid)}
            setContent={ (content: any) => onChangeConfirmPassword(content)}/>
        </View>

        <View style={styles.checkboxWrapper}>
        <View style={styles.checkboxContainer}>
        <View style={styles.checkBoxStyle}>
        <View>

      </View>
        </View>
        <Text style={styles.termsLabel} > I agree to the </Text>
        <TouchableOpacity onPress={acceptTerms}><Text style={styles.termsText}>terms and conditions</Text>
        </TouchableOpacity>
      </View>
      </View>

    </View>

        <TouchableOpacity onPress={handleSignup}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get access</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.accountButton}>
           <Text style={styles.accountText}>Already have a user?</Text>
           <TouchableOpacity onPress={ () => props.navigation.navigate('LOGIN') }>
            <Text style={styles.accountButtonText}>Log in</Text>
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
        width: 300,
        backgroundColor: 'rgba(186, 186, 221, 1)',
        color: 'snow',
      },

      buttonText: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        padding: 10,
        color: 'white',
        textTransform: 'capitalize',
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
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          textAlign: 'left',
          color: '#32305D',
          fontSize: 20,
          fontWeight: 'bold',
          marginRight: 90,
          marginBottom: 20,
          
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
        marginBottom: 16,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#32305D',
        borderRadius: 5,
        width: 17,
        height: 17,
        marginRight: 4,
      },

      checkBoxStyle: {
        flexDirection: "row",
        marginBottom: 20,
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
 

export default SignupScreen;


