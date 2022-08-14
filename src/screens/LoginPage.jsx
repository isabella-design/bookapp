import React from "react";
import {Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage({navigation}) {  
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return(
        <View style={styles.parentContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.headerYellowCircle}>
                </View>

                <LinearGradient style={styles.background}
                    colors={['rgba(64, 115, 247, 1.0)', 'rgba(255, 230, 0, 0.1)']}
                > 
                </LinearGradient>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome Back!
                    </Text>
                </View>

            </View>

            <View style={styles.loginContainer}>
                <TextInput
                    style={[styles.input, {'marginBottom': 35} ]}
                    placeholder= "Email"
                    value={email}
                    placeholderTextColor= "#808080"
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder= "Password"
                    value={password}
                    placeholderTextColor= "#808080"
                    onChangeText={setPassword}
                />

                <Pressable onPress={() => navigation.navigate('Forgot')} style={({ pressed }) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1.0
                    },
                   
                    ]}>
                        <Text style={styles.forgotText}>
                            Forgot Password?
                        </Text>
                </Pressable> 

                <Pressable onPress={() => navigation.navigate('Tabs')} style={({ pressed }) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1.0
                    },
                    styles.loginButton
                ]}>
                    <Text style={styles.loginText} >
                        Sign In
                    </Text>
                </Pressable>
                 
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Don't have an account? 
                    <Pressable onPress={() => navigation.navigate('SignUp')} style={({ pressed }) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1.0
                    },
                   
                    ]}>
                        <Text style={styles.signUpText}>
                            SIGN UP
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
        backgroundColor: "#FFFAF1",
    },

    titleContainer: {
        flex: 2.1,
        alignItems: "flex-start",
        padding: 30,
        justifyContent: "center",
        backgroundColor: "#FFFAF1",
    },

    welcomeTextContainer: {
       width: 180,
    },

    forgotText: {
        color: "black",
        textDecorationLine: "underline",
        margin: 14,
        marginBottom: 30,
    },

    footerText: {
        fontSize: 18,
        color: "white",
     },

     signUpText : {
        color: "#3F73F7",
        textDecorationLine: "underline",
        fontSize: 18,
        marginLeft: 4,
    },

    loginContainer: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#FFFAF1",
        
    },

    loginButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#3F73F7",

    },

    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    

    footerContainer: {
        flex: 0.5,
        backgroundColor: "#FFCC00",
        justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: 'absolute',
        left: 214,
        top: -55,
        height: 400,
        width: 400,
        borderRadius: 200,
    },

    headerYellowCircle : {
        position: 'absolute',
        left: -166,
        right: 0,
        top: -116,
        height: 500,
        width: 500,
        borderRadius: 250,
        backgroundColor: "#FFCC00",
    },

    welcomeText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
    },

    input: {
        margin: 12,
        borderBottomWidth: 0.75,
        borderColor: "#8A8888",
        paddingBottom: 8,
        fontSize: 15,
      },
 
    
});
