import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

interface Props {
    label: string;
    text: string;
    error: string;
    nameValid: boolean;
    onValid: (arg: boolean) => void;
    setContent: (arg: string) => void; 
}

const Input = ( {label='My default value', text, error, nameValid, onValid, setContent} : Props)  => {
    const [touched, setTouched] = useState(false);

    const handleNewInput = (enteredText: string) => {
        setTouched(true);
        enteredText === '' ? onValid(false) : onValid(true);
        setContent(enteredText);
    };

    if (!handleNewInput) {

    

   return (
      <View>
          <Text style={styles.placeHolder}>{label}</Text>
          <TextInput style={styles.textInput}  value={text} 
            onChangeText={handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!nameValid && touched && <Text style={styles.errorMsg}  >{error}</Text>}
      </View>
   );
    } else {
    return (
       <View>
          <Text style={styles.placeHolder}>{label}</Text>
                <TextInput style={styles.textInput}  value={text} 
                  onChangeText={handleNewInput}
                  onBlur={() => setTouched(false)}></TextInput>
                  {!nameValid && touched && <Text style={styles.errorMsg}  >{error}</Text>}
        </View>
         );


    }
}

const styles = StyleSheet.create({
    textInput : {
        borderWidth: 1,
        padding: 10,
        width: 298,
        borderColor: 'white',
    },

    errorMsg : {
        color: "red",
        margin: 12,
        marginTop: 1,
    },

    placeHolder : {
        margin: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 12,
        color: '#32305D',
        textTransform: 'uppercase',

    }
   
});

export default Input;