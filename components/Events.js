import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TimeIcon from './TimeIcon';
import LocationIcon from './LocationIcon';


const Events = props => {
    const navigation = useNavigation(); 
    console.log(props.event.eventId);
    let image = props.event.imageUrl
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Event", {id: props.event.eventId})}>

     
           
        <View style={styles.flatListWrapper}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
       
            <View style={styles.imageView} >
                <Image
                    style={styles.tinyLogo}
                    // source={props.event.imageUrl}/>
                    source={require('./../assets/eventbackground1.png')}/>
            
            </View>
            
            <Text style={styles.text}>{props.event.eventName}</Text>
            <Text style={styles.textSmall}>CBS yoga</Text>
            <View style={styles.timeLocationWrap}>
            <View style={styles.flexRow}><Text style={styles.textTime}>Mon, 1. Apr · 15.00 - 18.00</Text></View>
            <View style={styles.flexRow}><Text style={styles.textLocation}>Dalgas Have, 2000 Frederiksberg</Text></View>
         {/*    <Text style={styles.text}>{props.event.eventName}</Text>
            <Text style={styles.text}>{props.event.eventName}</Text>
            <Text style={styles.text}>{props.event.eventName}</Text> */}

       </View>
        </View>
        
    </TouchableOpacity>
 );
}

const styles = StyleSheet.create({

    flexRow: {
        flexDirection: 'row',
    },
    event: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        
    },

    background: {
        
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: 337,
            height: 175,
            borderRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            

        },

    flatListWrapper: {
        width: 337,
        height: 175,
        borderRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop: 20,
        backgroundColor: 'white',

        
        
     },
    textView: {
        paddingLeft: 5,
        paddingRight: 5,
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
    },
    message: {
        
    },
    text: {
        fontFamily: 'Teko',
         color: 'snow',
         fontSize: 26,
         position: 'absolute',
         marginTop: 90,
         margin: 11,
    },

    textSmall: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 12,
        position: 'relative',
        marginTop: -55,
        margin: 12,
        fontWeight: 'bold',
    },

    textTime: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 12,
        position: 'relative',
        marginTop: -90,
        margin: 12,
        fontWeight: 'bold',
    },
    textLocation: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 12,
        position: 'relative',
        marginTop: -75,
        margin: 12,
    },

    timeLocationWrap: {
        marginTop: 80,
    },


    dotView: {
         marginLeft: 'auto'
        
    },
    imageView: {
        marginTop: 0,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderRadius: 5,
        opacity: 0.5,
        
              
        
    },
    dot: {
     height: 12,
     width: 12,
     backgroundColor: '#5050A5',
     borderRadius: 100 / 2,
   },
    tinyLogo: {
     width: 337,
     height: 175,
     borderRadius: 5,
   },
 });
export default Events;