import {Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingPage({navigation}) {  
    return(
    <View style={styles.bigContainer}> 
        <View style={styles.landingTitleContainer}>
        <LinearGradient style={styles.background}
        colors={['rgba(250, 230, 0, 1.0)', 'rgba(255, 132, 161, 1.0)']}
        > 
    </LinearGradient>
        <Text style={styles.landingText}>
            Find Your Passion Project
        </Text>
        </View>
        <View style={styles.loginContainer}>
         <Pressable onPress={() => navigation.navigate('Login')} style={({ pressed }) => [
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

          <Pressable onPress={() => navigation.navigate('SignUp')} style={({ pressed }) => [
          {
            opacity: pressed
              ? 0.5
              : 1.0
          },
          styles.loginButton
        ]}> 
        <Text style={styles.loginText} >
          Sign Up
        </Text >
          </Pressable>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    landingPageContainer: {
        flex: 1,
         
    },

    landingTitleContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFAF1",
        
    },

    bigContainer: {
        flex: 1,
    },

    landingText: {
        fontSize: 70,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    
    },

    loginContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#FFFAF1",
    },

    background: {
        position: 'absolute',
        left: -200,
        right: 0,
        top: -200,
        height: 800,
        width: 800,
        borderRadius: 400,
        backgroundColor: "#FFFAF1",
        
        
    },

    loginButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 4,
        backgroundColor: "#4074F9",

    },

    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",

    },
    
});
