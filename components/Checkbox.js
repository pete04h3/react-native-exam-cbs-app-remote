import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtons = () => {
  const [checked, setChecked] = useState('false');

  React.useEffect(() => {
    console.log('Checkbox set to', checked);
    // add css to signup button (opacity some thing)
  }, [checked]);
  
  const handleRadio = () => {
    setChecked(!checked)
  }

  return (
    <View style={styles.radioButtonsWrap}>
    <View style={styles.radioButtonWrapper}>
      <RadioButton
        value='first'
        color="#32305D"
        uncheckedColor="#32305D"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => handleRadio()}

      />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({ 
    radioButtonsWrap: {
        flex: 1,
        height: 10,
        flexDirection: 'row',
        color: 'black',
    
        
    },
    radioButtonWrapper: {
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius: 5,
        
        
        

        
        
    }
   
});


export default RadioButtons;