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
                <SvgUri style={styles.svg}
                    resizeMode="contain"
                    uri="https://raw.githubusercontent.com/isabella-design/bookapp/main/assets/forgotCurve.svg"
                />
            </View>

            <View style={styles.mainTextContainer}>
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
    backgroundColor: "#FFFAF1",
    alignItems: "center",
    justifyContent: "center",
  }, 

  resetContainer: {
    flex: 3, 
    backgroundColor: "#FFFAF1",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  mainTextContainer: {
    flex: 1, 
    backgroundColor: "#FFFAF1",
    justifyContent: "center",
    alignItems: "center",
  },

  svg: {
    width: '100vw',
    height: "75%",
  },

  headerText: {
    color: "black",
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
