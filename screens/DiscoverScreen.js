import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,                          // needs to be here for the search filtering
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,                 // needs to be here for the search filtering
  Image
} from 'react-native';
import filter from 'lodash.filter';  // needs to be here for the search filtering





const DiscoverScreen = props => {


 return (

    <View style={styles.container}>

    <TouchableOpacity title="EVENTS" style={styles.button1} onPress={() => props.navigation.navigate("Events")}>
    <Image style={styles.image} source={require("./../assets/IMG_7066.png")}/>
    <Text style={styles.eventTouchText}>
          EVENTS
        </Text>     
    </TouchableOpacity>

    <TouchableOpacity title="All Student organisations" style={styles.button2} onPress={() => props.navigation.navigate("Organisations")}>
    <Image style={styles.image} source={require("./../assets/IMG_8080.png")}/>
    <Text style={styles.eventTouchText}>
          ALL STUDENT ORGANISATIONS
        </Text>     
    </TouchableOpacity>

    <TouchableOpacity title="All Posts" style={styles.button3} onPress={() => props.navigation.navigate("Posts")}>
    <Image style={styles.image} source={require("./../assets/IMG_9090.png")}/>
    <Text style={styles.eventTouchText}>
        ALL POSTS
        </Text>     
    </TouchableOpacity>

  </View>

 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
    },

    eventTouchText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: -70,
        fontFamily: "Teko",
        fontSize: 26,
        

    },

    button1: {
        backgroundColor: '#700F6E',
        borderRadius: 5,
        marginTop: 30,
        width: 337,
        height: 120,
        padding: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        flexDirection: 'column',

      },

      button2: {
        backgroundColor: '#32305D',
        borderRadius: 5,
        marginTop: 30,
        width: 337,
        height: 120,
        padding: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        flexDirection: 'column',

      },

      button3: {
        backgroundColor: '#07936B',
        borderRadius: 5,
        marginTop: 30,
        width: 337,
        height: 120,
        padding: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        flexDirection: 'column',

      },

      image: {
          width: 337,
          height: 120,
          margin: 0,
          marginLeft: -10,
          marginTop: -10,
          opacity: 0.2,
          
      },
    text: {
      fontSize: 20,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginRight: 200,
    },
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
    metaInfo: {
      marginLeft: 10
    },
    title: {
      fontSize: 18,
      width: 200,
      padding: 10
    }
  });

export default DiscoverScreen;