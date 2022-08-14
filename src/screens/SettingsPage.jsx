import {Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsPage({navigation}) {  
    return(
        <View style={styles.parentContainer}>
            <View style={styles.iconHeader}>
                <Text style={styles.nameText}>
                    Isabella
                </Text>
            </View> 

            <View style={styles.buttonsContainer}>
            <Pressable style={({ pressed }) => [
              {
                  opacity: pressed
                ? 0.5
                : 1.0
             },
            styles.signOutButton
            ]}>
                <Text style={styles.signOutText} >
                Favorited Events
                </Text>
            </Pressable>

            <Pressable style={({ pressed }) => [
              {
                  opacity: pressed
                ? 0.5
                : 1.0
             },
            styles.deleteButton
            ]}>
                <Text style={styles.signOutText} >
                Favorited Books
                </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Landing')} style={({ pressed }) => [
              {
                  opacity: pressed
                ? 0.5
                : 1.0
             },
            styles.favoritedEventsButton
            ]}>
                <Text style={styles.signOutText} >
                Sign Out
                </Text>
            </Pressable>

            <Pressable style={({ pressed }) => [
              {
                  opacity: pressed
                ? 0.5
                : 1.0
             },
            styles.favoritedBooksButton
            ]}>
                <Text style={styles.signOutText} >
                Delete Account
                </Text>
            </Pressable>

            
            </View> 
            
            
        </View>
     
    );
};

const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        backgroundColor: "#FFFAF1",
    },

    iconHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#FFFAF1",
    },

    buttonsContainer: {
        flex: 3,
        padding: 15,
        backgroundColor: "#FFFDF4",
    },

    signOutButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 4,
        backgroundColor: "#FFB459",

    },

    deleteButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 4,
        backgroundColor: "#FF6484",

    },

    favoritedEventsButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 4,
        backgroundColor: "#B9DAFB",

    },

    favoritedBooksButton: {
        borderRadius: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 4,
        backgroundColor: "#7BD6AA",

    },

    signOutText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",

    },

    nameText: {
        color: "#3F73F7",
        fontSize: 50,
        fontWeight: "bold",


    },

   
});
