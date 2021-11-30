import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import InformationIcon from './InfoIcon';

// Properties with build in types
interface Props {
    secure: boolean,
    placeholder: string;
    label: string;
    text: string;
    error: string;
    nameValid: boolean;
    onValid: (arg: boolean) => void;
    setContent: (arg: string) => void;
}

const Input = ({ placeholder, secure, label = 'My default value', text, error, nameValid, onValid, setContent }: Props) => {

    // useState() - Declares new state variable as false
    const [touched, setTouched] = useState(false);

    // if intered text is empty string then onValid(false) else onValid(true) 
    const handleNewInput = (enteredText: string) => {
        setTouched(true);
        enteredText === '' ? onValid(false) : onValid(true);
        setContent(enteredText);
    };

    // if user is typing in input or not
    if (!handleNewInput) {



        return (
            <View>
                <Text style={styles.placeHolder}>{label}</Text>
                <TextInput style={styles.textInput}
                    value={text}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    onChangeText={handleNewInput}
                    onBlur={() => setTouched(true)}></TextInput>
                {!nameValid && touched && <Text style={styles.errorMsg}  >{error}</Text>}
                <InformationIcon />
            </View>




        );
    } else {
        return (
            <View>

                <Text style={styles.placeHolder}>{label}</Text>
                <TextInput style={styles.textInput}
                    value={text}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    onChangeText={handleNewInput}
                    onBlur={() => setTouched(false)}></TextInput>
                {!nameValid && touched && <Text style={styles.errorMsg}  >{error}</Text>}

            </View>

        );


    }
}

const styles = StyleSheet.create({



    textInput: {
        borderWidth: 1,
        padding: 10,
        width: 298,
        borderColor: 'white',
    },

    errorMsg: {
        color: "red",
        margin: 12,
        marginTop: 1,
    },

    wrapperInline: {
        flexDirection: 'row',
    },

    infoIcon: {
        flexDirection: 'row',
    },

    placeHolder: {
        margin: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 12,
        color: '#32305D',
        textTransform: 'uppercase',

    }

});

export default Input;