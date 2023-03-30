import { Text, View, StyleSheet } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Input } from "react-native-elements"
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>

            <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('home')} />
            <Text style={styles.text}>Welcome Back To Splitwise!</Text>

            <View style={styles.input}>
                <Input style = {styles.textInput} placeholder="Email address" />
                <Input placeholder="Password" secureTextEntry />
            </View>

            <Button containerStyle={styles.button} title="Login" />

            <Text style={styles.text1}>Forgot Your Password?</Text>
        </SafeAreaView>

    )

}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white"
    },

    text: {
        fontWeight: "bold",
        marginTop: 70,
        alignSelf: "center",
        fontSize: 20

    },
    input: {
        marginTop: 40

    },
    button: {

        width: 200,
        marginTop: 10,
        borderWidth: 10,
        alignSelf: 'center',
        borderColor: "white",
        borderRadius: 20

    },
    text1: {

        alignSelf: "center",
        fontStyle: "italic"

    },
    textInput: {

        borderBottomColor: '#008000', // Add this to specify bottom border color
        borderBottomWidth:  1   // Add this to specify bottom border thickness
    }
})