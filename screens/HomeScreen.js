import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = props => {

const isValid = useSelector((state) => state.user.isValid)
  React.useEffect(() => {
   console.log('User account is set to', isValid);
 }, [isValid]); 

 return (
    <View>
        <Text>This is the home screen</Text>
    </View>
 );
}

const styles = StyleSheet.create({
 
});

export default HomeScreen;