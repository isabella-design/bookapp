import { DatePickerAndroid, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExplorePage() {  
  const printHello = () => {
    console.log("Hello");
  }

  // return <SignUpPage/> 
  return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>

  {/*header on home page title*/}
        <View style={styles.headerContainer}>
          <Text style={[styles.BeyondTheBooksText, styles.yellow]}> 
            Beyond the Books 
          </Text>
        </View>
        
  {/*Menu bar buttons*/}
        <View style={styles.buttonContainer}>
          <Pressable 
            onPress={printHello}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={['#FF259B', '#FFC3E4']}
              start={{ x: 0, y: 0 }}  // left
              end={{ x: 0.95, y: 0 }}  // start from right
              style={styles.button}
            >
              <Text style={styles.menuText}>Science</Text>
            </LinearGradient>
          </Pressable>
          <Pressable 
            onPress={printHello}
            >
            <LinearGradient
              // Button Linear Gradient
              colors={['#FF9B52', '#FFEE51']}
              start={{ x: 0, y: 0 }}  // left
              end={{ x: 0.95, y: 0 }}  // start from right
              style={styles.button}
            >
              <Text style={styles.menuText}>Tech</Text>
            </LinearGradient>
            </Pressable>

            <Pressable 
            onPress={printHello}
            >
            <LinearGradient
              // Button Linear Gradient
              colors={['#27D093', '#BEEEE5']}
              start={{ x: 0, y: 0 }}  // left
              end={{ x: 0.95, y: 0 }}  // start from right
              style={styles.button}
            >
              <Text style={styles.menuText}>Engineering</Text>
            </LinearGradient>
            </Pressable>

            <Pressable 
            onPress={printHello}
            >
            <LinearGradient
              // Button Linear Gradient
              colors={['#1A43AC', '#7DC9FF']}
              start={{ x: 0, y: 0 }}  // left
              end={{ x: 0.95, y: 0 }}  // start from right
              style={styles.button}
            >
              <Text style={styles.menuText}>Math</Text>
            </LinearGradient>
            </Pressable>


            

          
          
        </View>
      
  {/*one of the event buttons*/}
        <View style={styles.eventsContainer}>
          <Text>
            Upcoming Events
          </Text>
  
          <Pressable
            onPress={printHello}
            style={ 
              ({ pressed }) => [
                styles.eventsButton,
                { backgroundColor: pressed ? 'red' : 'white' },
              ]
            }
          >

            <Image
              style={styles.eventsImage}
              source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />

            <Text style={[styles.eventText,]}>
              Attend Math Festival
            </Text>

            <Text style={[styles.bodyBoldText,]}>
              Suggested age:
              <Text style={[styles.bodyText,]}>
                10+
              </Text>
            </Text>
            <Text style={[styles.bodyBoldText,]}>
                Hosted By: 
                <Text style={[styles.bodyText,]}>
                    Orlando Math Circle
                </Text>
            </Text>

          </Pressable>
        </View>

  {/*guidelines container with info on app*/}
        <View style={styles.announcementsContainer} >
          <Text style={[styles.clubGuideText,]}>
            Club Guides
          </Text>

          <Pressable
            onPress={printHello}
            style={ 
              ({ pressed }) => [
                styles.announcement1,
                { backgroundColor: pressed ? 'white' : 'pink' },
              ]
            }
          >  

          <Image
              style={styles.announcementsImage}
              source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />
        
            <Text style={[styles.clubText,]}>
              Are we on the same page?
            </Text>

          </Pressable>
        </View>
        </View>
     
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFAF1',
  }, 

  headerContainer: {
    flex: 2.5, 
    backgroundColor: "#4073F7",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  eventsContainer: {
    flex: 4, 
    backgroundColor: "#FFFAF1",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },

  announcementsContainer: {
    flex: 3, 
    backgroundColor: "#FFFAF1",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },

  BeyondTheBooksText: {
    fontSize: 43,
    color: "white",
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  scienceButton: {
        borderWidth: 2,
        borderColor: "pink",
        borderRadius: 25,
        marginHorizontal: 8,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
     
  },

  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 25,
    marginHorizontal: 8,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },

  eventsButton: {
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 25,
    marginHorizontal: 8,
    width: 260,
    height: 250,
    alignItems: "flex-start",
    padding: 13,
    shadowColor: "#8D9093",
    shadowOffset: { width: 0, height: 1 },  // negative values bring shadow up higher
    shadowOpacity: 0.5,
    shadowRadius: 20,

  },

  eventsImage: {
    width: 200,
    height: 100
  },

  eventText: {
    fontSize: 20,
    color: "black",
    marginVertical: 10,
  },

  bodyBoldText: {
    fontSize: 12,
    color: "#4073F7",
    fontWeight: "bold",
  },

  bodyText: {
    fontSize: 12,
    color: "#4073F7",
    marginTop: 10,
  },

  announcement1: {
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 25,
    marginHorizontal: 8,
    width: "90%",
    aspectRatio: 3,
    alignItems: "flex-start",
    padding: 13,
    flexDirection: "row",
  
  },

  announcementsImage: {
    width: 80,
    height: 60
  },

  clubText: {
    fontSize: 10,
    color: "white",
    marginTop: 30,
  },

  clubGuideText: {
    fontSize: 12,
    color: "black",
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "900",
  },

  menuText: {
    color: "white",
    fontSize: 15, 
    fontWeight: "bold"
  }


});
