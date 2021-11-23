import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Events = props => {
    const navigation = useNavigation(); 
    console.log(props.event.eventId);
    let image = props.event.imageUrl
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Event", {id: props.event.eventId})}>
           
        <View style={styles.event}>
            <View style={styles.imageView}>
                <Image
                    style={styles.tinyLogo}
                    // source={props.event.imageUrl}/>
                    source={require('./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png')}/>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>{props.event.eventName}</Text>
            </View>
        </View>
    </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
   
    event: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    textView: {
        paddingLeft: 5,
        paddingRight: 5,
        width: '80%'
    },
    message: {
        
    },
    text: {
         fontWeight: "bold",
    },
    dotView: {
         marginLeft: 'auto'
        
    },
    imageView: {
        marginTop: -10
    },
    dot: {
     height: 12,
     width: 12,
     backgroundColor: '#5050A5',
     borderRadius: 100 / 2,
   },
    tinyLogo: {
     width: 50,
     height: 50,
   },
 });
export default Events;