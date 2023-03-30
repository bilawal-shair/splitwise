import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from "react-native"
import React from "react"
import { Button } from "react-native-elements"

import { SafeAreaView } from "react-native-safe-area-context"


const HomeScreen = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>

            <Image

                source={{

                    uri: "data:image/png;base64,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"

                }}
                style={styles.image}

            />
            <Text style={styles.text}>Splitwise</Text>

            <View style={{ height: 100, marginTop: 100 }}>

                <Button containerStyle={styles.button} onPress={() => navigation.navigate("signup")} title="Sign up" />
                <Button containerStyle={styles.button} onPress={() => navigation.navigate("login")} type="outline" title="Log In" />



                <TouchableOpacity style={styles.logoText}>

                    <Image source={{
                        uri: "data:image/png;base64,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",
                      }}

                        style={styles.logoImage}
                    />

                    <Text style={{marginLeft: 7}}> SignIn with Google</Text>
                </TouchableOpacity>


                <View   style = {{flexDirection: "row", alignSelf: "center", marginTop: 80}}>
                    <TouchableOpacity style ={{flexDirection: "row"}}>
                        <Text  onPress={() => Linking.openURL('https://www.splitwise.com/terms')} style={{  textDecorationLine: "underline", paddingRight:3}}>Terms</Text>
                        <Text>|</Text>
                    </TouchableOpacity>


                    <TouchableOpacity  style ={{flexDirection: "row"}}>
                       <Text  onPress={() => Linking.openURL('https://www.splitwise.com/privacy')} style={{  textDecorationLine: "underline",paddingRight:3, paddingLeft:2}}>Privacy Policy</Text>
                       <Text>|</Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                          <Text  onPress={() => Linking.openURL('https://www.splitwise.com/contact')} style={{  textDecorationLine: "underline", paddingLeft:2}}> ContactUs</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </SafeAreaView>
    )

}

export default HomeScreen

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "white"

    },

    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        fontStyle: "normal",

    },
    image: {

        height: 100,
        width: 100,
        alignSelf: 'center',
        backgroundColor: "white",
        marginTop: 120
        
    },
    button: {

        width: 300,
        marginTop: 10,
        borderWidth: 8,
        alignSelf: 'center',
        borderColor: "white",
        shadowColor: '#808080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 5
    },
    text1: {

        alignSelf: "center",
        marginTop: 20,
        textDecorationLine: "underline",
        fontStyle: "italic"

    },

    logoImage: {
        width: 22,
        height: 22
    },
    logoText: {

        flexDirection: "row",
        marginTop: 20,
        alignSelf: "center",
        borderWidth: 5,
        padding: 10,
        width: 300,
        height: 50,
        borderColor: "white",
        shadowColor: '#808080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 1,
        justifyContent: "center",
    },
    signup: {

        backgroundColor: "green"
    }

})