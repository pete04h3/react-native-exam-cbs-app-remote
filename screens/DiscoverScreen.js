import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';


const DiscoverScreen = props => {
 return (
 <View><Text>Discover screen</Text>
 <Button title="Events" onPress={() => props.navigation.navigate("Events")} />
 
 </View>
 );
}

const styles = StyleSheet.create({
 
});

export default DiscoverScreen;