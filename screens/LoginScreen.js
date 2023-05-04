import { Text, View, StyleSheet, TextInput } from "react-native"
import React, { useEffect } from "react"
import { useState } from "react";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase";
import { KeyboardAvoidingView } from "react-native";
import { MaterialIcons, AntDesign,FontAwesome} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"
// import { KeyboardAvoidingView } from "react-native";


WebBrowser.maybeCompleteAuthSession();


const LoginScreen = ({ navigation }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ field: '', message: '' });
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);



    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '1016676274959-tgd3qvisqdv4l0m62d47dq233un9tmfa.apps.googleusercontent.com',
    });

    useEffect(() => {

        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    const getUserInfo = async () => {

        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {

        }

    };





    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((authUser) => {

            console.log(authUser);
            if (authUser) {

                navigation.replace("home");
            }


        });
        return unsubscribe;

    }, []);

    const signIn = () => {



        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));

    }
    return (

        <KeyboardAvoidingView behavior="position" style={styles.container} >


            <Text style={{ alignSelf: "center", marginTop: 100, fontSize: 30, color: "#4B0082" }}>Login Screen</Text>


            <View style={{ alignSelf: "center", marginTop: 50 }}>

                <Image
                    source={{
                        uri:
                            "data:image/jpeg;base64,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",
                    }}
                    style={{ width: 200, height: 200, borderRadius: 100 }}
                />
            </View>



            <View style={{ width: 300, alignSelf: "center", marginTop: 50 }}>

                <View style={{
                    flexDirection: "row", borderWidth: 1,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    height: 60,
                    width: 320,
                    borderRadius: 30
                    }}>


                    <MaterialIcons style={{ marginTop: 14 }} name="email" size={22} color="black" />

                    <TextInput
                        style={{ marginLeft: 100 }}


                        placeholder="Email"
                        autofocus type="text"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    {error.field === 'email' && (
                        <Text style={styles.error}>{error.message}</Text>
                    )}


                </View>


                <View style={{
                    marginTop: 10, flexDirection: "row", borderWidth: 1,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    height: 60,
                    width: 320,
                    borderRadius: 30
                }}>

                  -+

                    <TextInput

                        style={{ marginLeft: 100 }}
                        placeholder="Password"
                        type="password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    {error.field === 'password' && (
                        <Text style={styles.error}>{error.message}</Text>
                    )}


                </View>
            </View>



            <View style={{ marginTop: 10, marginLeft: 30, width: 170, alignSelf: "center", marginBottom: 20 }}>

                <Button buttonStyle={{ height: 50, backgroundColor: "gray", borderRadius: 10, }}
                    onPress={signIn} title="Login" />

            </View>

               {userInfo === null ? (
                <TouchableOpacity
                    disabled={!request}

                    onPress={() => {
                        promptAsync();
                    }}

                    style={{
                        marginLeft: 110, height: 53, width: 170, borderBottomColor: "#C0C0C0", borderRadius: 10, backgroundColor: "#FFFFFF",
                        borderBottomWidth: 2, shadowOpacity: 0.5, elevation: 9
                    }}>
                    <Image source={{
                        uri: "data:image/png;base64,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",
                    }}

                        style={{
                            marginLeft: 9,
                            marginTop: 12,
                            width: 25,
                            height: 25
                        }}
                    />
                    <Text style={{ marginLeft: 36, marginTop: -24 }}   > SignIn with Google</Text>
                </TouchableOpacity>

            ) : (<Text style={styles.text}>{userInfo.name}</Text>
            )}



            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 50, marginTop: 10 }}>

                <Text>Do you have an account?</Text>

                <Text onPress={() => navigation.navigate("register")} style={{ fontSize: 17, textDecorationLine: "underline" }}>Create an Account</Text>
            </TouchableOpacity>




        </KeyboardAvoidingView>
    );
}

export default LoginScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        height: 100
    },
});