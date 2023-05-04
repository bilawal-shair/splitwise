import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { Button, Input } from "react-native-elements";
import { auth, db } from "../firebase";
import { MaterialIcons, AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    useLayoutEffect(() => {

        navigation.setOptions({
            headerBackTitle: "Login",
        });

    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,

                })

            })
            .catch((error) => alert(error.message))
    };


    return (

        <KeyboardAvoidingView behavior="position" style={styles.container} >

            <TouchableOpacity onPress={() => navigation.navigate("login")} style={{ marginTop: 70, marginLeft: 20 }}>

                <Feather name="arrow-left-circle" size={30} color="black" />


            </TouchableOpacity>


            <Text style={{ marginTop: 70, fontSize: 30, alignSelf: "center", color: "#4B0082" }}>  Register Screen</Text>


            <View style={{ width: 300, alignSelf: "center", marginTop: 100 }}>

                <View style={{
                    flexDirection: "row", borderWidth: 1,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    height: 60,
                    width: 320,
                    borderRadius: 30
                }}>

                    <Ionicons style = {{marginTop: 14}} name="md-person" size={22} color="black" />


                    <TextInput

                        style={{ marginLeft: 100 }}

                        placeholder="Full Name"
                        autofocus type="text"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />


                </View>


                <View style={{
                    marginTop: 10, flexDirection: "row", borderWidth: 1,  // size/width of the border
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
                        type="email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />


                </View>



                <View style={{
                    marginTop: 10, flexDirection: "row", borderWidth: 1,  // size/width of the border
                    borderColor: 'lightgrey',  // color of the border
                    paddingLeft: 10,
                    height: 60,
                    width: 320,
                    borderRadius: 30
                }}>


                    <FontAwesome style={{ marginTop: 15 }} name="lock" size={22} color="black" />
                    <TextInput

                        style={{ marginLeft: 100 }}

                        placeholder="Password"
                        type="password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>


            </View>

            <View style={{ marginLeft: 10, width: 130, alignSelf: "center", marginTop: 50 }}>
                <Button buttonStyle={{ height: 50, backgroundColor: "gray", borderRadius: 10, }} onPress={register} title="Register" />
            </View>
        </KeyboardAvoidingView>


    );
}

export default RegisterScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white"
    },
});