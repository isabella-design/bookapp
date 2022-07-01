import React from "react";
import { DatePickerAndroid, Pressable, StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationHelpersContext } from "@react-navigation/native";
import { SvgUri} from "react-native-svg";

export default function LoginPage({navigation}) {  
    const [email, setEmail] = React.useState("");

    const confirmAlert = () => {
        Alert.alert(
            "Reset Password",  // title of alert
            "Please check your email to reset your password 🥳",  // message body of alert
            [
                {
                    text: "Ok",
                    onPress: () => navigation.navigate('Login'),
                    style: "cancel"
                },
            ]
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>

                <SvgUri
                    width="200%"
                    height="100%"
                    uri="https://raw.githubusercontent.com/isabella-design/bookapp/2bab63c40ad3f4e3ed32a3d6b0f7e67a929860b6/assets/forgotCurve.svg"
                />
                
                <Text style={styles.headerText}> 
                    Reset Password
</Text>
            </View>

            <View style={styles.resetContainer}>
                <TextInput
                    style={[styles.input, {'marginBottom': 35} ]}
                    placeholder= "Email"
                    value={email}
                    placeholderTextColor= "#808080"
                    onChangeText={setEmail}
                />
                <Pressable onPress={() => confirmAlert()} style={({ pressed }) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1.0
                    },
                    styles.nextButton
                ]}>
                    <Text style={styles.nextText} >
                        Send Link
                    </Text>
                </Pressable>
            </View>
        </View>
        
     
    );
};





const styles = StyleSheet.create({
    
container: {
    flex: 1,
},
  headerContainer: {
    flex: 2,
  }, 

  resetContainer: {
    flex: 3, 
    backgroundColor: "#FFFDF4",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    flex: 2,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    },

nextButton: {
    borderRadius: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#3F73F7",
},

nextText: {
    color: "white",
    fontSize: 20,
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
