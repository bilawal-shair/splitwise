import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const [isVisible, setisVisible] = useState(true);

    const width = new Animated.Value(0);
    const height = new Animated.Value(0)

    const IMAGE =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVe7xHUBx5QqiQQXmYDtpQSA6miwUzdflB9zcJsoKCIQ&s';

    useEffect(() => {
        Animated.timing(
            width,
            {
                toValue: 260,
                duration: 1200,
                useNativeDriver: false,
            },
        ).start();

        Animated.timing(
            height,
            {
                toValue: 260,
                duration: 1200,
                useNativeDriver: false,
            },
        ).start();
    }, []);

    const Hide_Splash_Screen = () => {
        setisVisible(false);
    }

    useEffect(() => {
        let myTimeout = setTimeout(() => {
            Hide_Splash_Screen();
            { navigation.navigate('home') }

        }, 3000);





    }, []);


    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: IMAGE }}
                style={{
                    width: width,
                    height: height,
                    position: "absolute"
                }}
                resizeMode='cover'
            />
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    title: {
        fontSize: 23,
        fontWeight: '800',
    },
});

export default SplashScreen;