import {Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function BooksThatInspire() {  
    return(
    <View style={styles.inspirePageContainer}>
        <View style={styles.inspireHeaderContainer}>
        <Text style={styles.headerText}>
          STEM Stories That Inspire
        </Text>
        </View>

        <View style={styles.inspireHorizontalContainer}>
          <Pressable style={styles.horizontalPressable}>
          <Image
            style={styles.inspireImage}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          />
        <Text style={styles.womenInSpaceText} >
          Women in Space
        </Text>
          </Pressable>
        </View>

        <View style={styles.inspireGeneralContainer}>
          <View style={styles.leftPanelContainer}>
            <Text>
              STEM Stories
            </Text>
          </View>

          <View style={styles.rightPanelContainer}>
            <Text>
              Discover Math
            </Text>
          </View>
        </View>
      </View>
     
    );
};


const styles = StyleSheet.create({
    inspirePageContainer: {
        flex: 1,
    },
    inspireHeaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    }, 
    inspireHorizontalContainer: {
        padding: 20,
        flex: 2.5,
        backgroundColor: "gold",
    }, 
    inspireGeneralContainer: {
        flex: 4,
        backgroundColor: "yellow",
        flexDirection: "row",
    },

    leftPanelContainer: {
        backgroundColor: "white",
        flex: 1,

    },

    rightPanelContainer: {
      backgroundColor: "green",
      flex: 1,

    },

    headerText: {
      fontFamily: "Times New Roman",
      color: "blue",
      fontSize: 30,
    
    },

    womenInSpaceText: {
      fontFamily: "Times New Roman",
      color: "blue",
      fontSize: 20,
    
    },

    horizontalPressable: {
      padding: 20,
      borderRadius: 20,
      height: 200,
      backgroundColor: "pink",
      borderColor: "blue",
    }

    

    

});
