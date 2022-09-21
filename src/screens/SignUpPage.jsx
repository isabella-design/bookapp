import React from "react";
import {Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function SignUpPage({navigation}) {  
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("success")
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("signup fail", errorMessage)
                // ..
            });
    }
    
    return(
        <View style={styles.parentContainer}>
            <View style={styles.titleContainer}>
                <LinearGradient style={styles.background}
                    colors={['rgba(80, 128, 251, 1.0)', 'rgba(229, 237, 255, 0.6)']}
                > 
                </LinearGradient>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome Aboard!
                    </Text>
                </View>

            </View>

            <View style={styles.signUpContainer}>

            <TextInput
                style={styles.input}
                placeholder= "Name"
                value={name}
                placeholderTextColor= "white"
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder= "Email"
                value={email}
                placeholderTextColor= "white"
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder= "Password"
                value={password}
                placeholderTextColor= "white"
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder= "Confirm Password"
                value={confirmPassword}
                placeholderTextColor= "white"
                onChangeText={setConfirmPassword}
            />

            <Pressable onPress={() => signUp()} style={({ pressed }) => [
                {
                    opacity: pressed
                    ? 0.5
                    : 1.0
                 },
                styles.signUpButton
                ]}>
                <Text style={styles.signUpText} >
                 Sign Up
                </Text>
            </Pressable>
                 
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Already have an account?  
                    <Pressable onPress={() => navigation.navigate('Login')} style={({ pressed }) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1.0
                    },
                   
                    ]}>
                        <Text style={styles.signInText}>
                            SIGN IN
                        </Text>
                    </Pressable>
                     
                </Text>

                 
                 
            </View>

        </View>
     
    );
};

const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        backgroundColor: "#FFCC00",
    },

    titleContainer: {
        flex: 1.3,
        alignItems: "flex-start",
        padding: 30,
        justifyContent: "flex-end",
        backgroundColor: "#FFCC00",
    },

    welcomeTextContainer: {
       width: 180,
    },

    signInText : {
        color: "#FFCC00",
        textDecorationLine: "underline",
        fontSize: 18,
        marginLeft: 4,
    },

    footerText: {
        fontSize: 18,
        color: "white",
     },

    signUpContainer: {
        flex: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "space-between",
        backgroundColor: "#FFCC00",
        
        
    },

    signUpButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#3F73F7",

    },

    signUpText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    

    footerContainer: {
        flex: 0.5,
        backgroundColor: "#3F73F7",
        justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: 'absolute',
        left: 214,
        top: -60,
        height: 300,
        width: 300,
        borderRadius: 150,
    },

    welcomeText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
    },

    input: {
        margin: 12,
        borderBottomWidth: 0.75,
        borderColor: "white",
        paddingBottom: 8,
        fontSize: 15,
      },
 
    
});
