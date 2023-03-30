import { Text, View, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Input } from "react-native-elements"

import axios from "axios"


const SignupScreen = ({ navigation }) => {


    const [data, setData] = useState([]);

    const baseURL = '';
    
    
    const getApi = () =>{
        axios({
            method: 'GET',
            url: `${baseURL}/posts`,
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    } 

    return (

        <SafeAreaView style={styles.container}>
            <Image

                source={{

                    uri: "data:image/png;base64,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"

                }}
                style={styles.image}
            />

            <View style={styles.inputText}>
                <Input style = {styles.textInput} placeholder="First Name" />
                <Input style = {styles.textInput} placeholder="Last Name" />
                <Input style = {styles.textInput} placeholder="Mobile Number" />
                <Input style = {styles.textInput} placeholder="Email Address" />
                <Input style = {styles.textInput} placeholder="Password" />
                <Input style = {styles.textInput} secureTextEntry = {true} placeholder="Confirm Password"  />
            </View>

          

            <View style={styles.button1}>
                <Button onPress={() => navigation.navigate('home')} containerStyle={styles.button} type="outline" title="Back" />
                <Button containerStyle={styles.button} title="Done" />
            </View>

            <Text style={styles.text}>By Signing Up, You accept the Splitwise Terms of services</Text>

        </SafeAreaView>

    )

}

export default SignupScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white"

    },
    image: {

        height: 100,
        width: 100,
        backgroundColor: "white",
        marginTop: 60

    },
    button: {

        width: 100,
        marginTop: 10,
        borderWidth: 10,
        alignSelf: 'center',
        borderColor: "white",
        borderRadius: 20,
        color: "64ad6a"


    },
    button1: {
        flexDirection: "row",
        alignSelf: "center"
    },
    text: {

        fontSize: 15,
        alignSelf: "center",
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 20,
        fontStyle: "italic"

    },
    inputText: {
        underlineColorAndroid: 'green'
    },
    textInput: {

        borderBottomColor: '#008000', // Add this to specify bottom border color
        borderBottomWidth:  1   // Add this to specify bottom border thickness
    }


})