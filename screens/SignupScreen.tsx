import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { signup } from '../store/actions/UserActions';
import Input from './../components/Input';
import ImagesExample from './../components/ImageExample'



const SignupScreen = (props: any) => {


  // --- For signup form

  // useState() - Declares new state variable
  const [changeEmail, setChangeEmail] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [changePassword, setChangePassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Invoke hook useDisptach and store it to variable dispatch to dispatch actions
  const dispatch = useDispatch();

  // function component to handle signup
  const handleSignup = () => {
    dispatch(signup(changeEmail, changePassword, props)); // working
  }




  // --- For the Terms and condition
  const [checked, setChecked] = useState(''); // useState is empty
  const [shouldShow, setShouldShow] = useState(''); // useState is empty


  const handleRadio = () => {
    setChecked(!checked as any) // checkbox set to true/false
  }

  React.useEffect(() => {
    console.log('Checkbox set to', checked); //Logs checkbox to true/false
  }, [checked]);

  React.useEffect(() => {
    console.log('Opening terms and condition module', shouldShow); // Opening terms and condiiton
  }, [shouldShow]);



  return (

    <View style={styles.container}>


      {/*TOP OF FORM*/}
      <View style={styles.imgWrap}>
        <ImagesExample />
      </View>
      <View style={styles.headLineWrapper}><Text style={styles.headLine}>Sign up to get access</Text></View>

      {/*FORM*/}
      <View style={styles.wrapper}>
        <SafeAreaView>

          <SafeAreaView style={styles.wrapperInline}>
            <Input
              secure={false}
              placeholder='sije19ab@student.cbs.dk'
              label="E-mail"
              error="Please fill out your username"
              text={changeEmail} nameValid={nameValid}
              onValid={(valid: any) => setNameValid(valid)}
              setContent={(content: any) => setChangeEmail(content)} />
          </SafeAreaView>

          <SafeAreaView style={styles.wrapperInline}>
            <Input
              secure={true}
              placeholder="********"
              label="Password"
              error="Please fill out your password"
              text={changePassword} nameValid={passwordValid}
              onValid={(valid: any) => setPasswordValid(valid)}
              setContent={(content: any) => setChangePassword(content)} />
          </SafeAreaView>

          <SafeAreaView style={styles.wrapperInline}>
            <Input
              secure={true}
              placeholder="********"
              label="Repeat Password"
              error="Password dosn't match"
              text={confirmPassword} nameValid={confirmPasswordValid}
              onValid={(valid: any) => setConfirmPasswordValid(valid)}
              setContent={(content: any) => setConfirmPassword(content)} />
          </SafeAreaView>

        </SafeAreaView>

        {/*CHECKBOX terms and condition*/}
        <View style={styles.checkboxWrapper}>
          <View style={styles.checkboxContainer}>

            <View style={styles.checkBoxStyle}>
              <View style={styles.radioButtonWrapper}>
                <RadioButton
                  value="false"
                  color="#32305D"
                  uncheckedColor="#32305D"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => handleRadio()} />
              </View>
            </View>

            <Text style={styles.termsLabel} > I agree to the </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('TermsAndConditionScreen')}><Text style={styles.termsText}>terms and conditions</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>

      {/*SIGNUP BUTTON*/}
      <TouchableOpacity disabled={!checked} style={!checked ? styles.button : styles.buttonValid} onPress={handleSignup}>
        <View>
          <Text style={styles.buttonText}>Get access</Text>
        </View>
      </TouchableOpacity>

      {/*ALREADY A USER, change to Login*/}
      <View style={styles.accountButton}>
        <Text style={styles.accountText}>Already have a user?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('LOGIN')}>
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

  termsContainer: {
    flex: 0,
    height: 600,
    margin: 20,
    marginTop: 660,
    //zIndex: 999,
    backgroundColor: 'white',

  },

  radioButtonWrapper: {
    borderWidth: 1,
    borderColor: 'darkblue',
    borderRadius: 5,
  },

  infoIcon: {
    flexDirection: 'row',
  },

  check: {                            // THIS IS THE ACTUAL CHECKBOX NBS!
    backgroundColor: 'transparent',
    borderColor: '#32305D',
    borderWidth: 2,
    borderRadius: 5,
    width: 27,
    height: 27,
    marginTop: 5,
    marginRight: 0,
  },

  checkboxwrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 15,

  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },

  imgWrap: {
    width: 133,
    marginTop: 30,
    marginBottom: 10,

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
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },

  buttonValid: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 4,
    elevation: 3,
    width: 300,
    backgroundColor: '#5050A5',
    color: 'snow',
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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

  accountButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginBottom: 20,
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
    marginRight: 115,
    marginBottom: 20,
    fontFamily: "Teko",


  },

  headLineWrapper: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 3,

  },


  checkboxWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,

  },

  checkbox: {
    marginBottom: 16,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: '#32305D',
    borderRadius: 5,
    width: 17,
    height: 17,
    marginRight: 5,
  },

  checkBoxStyle: {
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },

  termsLabel: {
    textTransform: 'none',
    color: '#32305D',
    borderStyle: 'solid',
    textDecorationLine: 'none',
    fontSize: 12,
    marginTop: 12,
  },

  termsText: {
    textTransform: 'lowercase',
    color: '#32305D',
    borderStyle: 'solid',
    textDecorationLine: 'underline',
    fontSize: 12,
    marginTop: 11.5,



  },





});


export default SignupScreen;