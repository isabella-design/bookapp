import { DatePickerAndroid, Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
          >
            <Pressable 
              onPress={printHello}
              style={({ pressed }) => [
                {
                    opacity: pressed
                    ? 0.85
                    : 1.0
                },
               
                ]}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={['#FF259B', '#FFC3E4']}
                start={{ x: 0, y: 0 }}  // left
                end={{ x: 0.99, y: 0 }}  // start from right
                style={styles.button}
              >
                <Text style={styles.menuText}>Science</Text>
              </LinearGradient>
            </Pressable>
            <Pressable 
              onPress={printHello}
              style={({ pressed }) => [
                {
                    opacity: pressed
                    ? 0.85
                    : 1.0
                },
               
                ]}
              >
              <LinearGradient
                // Button Linear Gradient
                colors={['#FF9B52', '#FFEE51']}
                start={{ x: 0, y: 0 }}  // left
                end={{ x: 0.99, y: 0 }}  // start from right
                style={styles.button}
              >
                <Text style={styles.menuText}>Tech</Text>
              </LinearGradient>
              </Pressable>

              <Pressable 
              onPress={printHello}
              style={({ pressed }) => [
                {
                    opacity: pressed
                    ? 0.85
                    : 1.0
                },
               
                ]}
              >
              <LinearGradient
                // Button Linear Gradient
                colors={['#27D093', '#BEEEE5']}
                start={{ x: 0, y: 0 }}  // left
                end={{ x: 0.99, y: 0 }}  // start from right
                style={styles.button}
              >
                <Text style={styles.menuText}>Engineering</Text>
              </LinearGradient>
              </Pressable>

              <Pressable 
              onPress={printHello}
              style={({ pressed }) => [
                {
                    opacity: pressed
                    ? 0.85
                    : 1.0
                },
               
                ]}
              >
              <LinearGradient
                // Button Linear Gradient
                colors={['#1A43AC', '#7DC9FF']}
                start={{ x: 0, y: 0 }}  // left
                end={{ x: 0.99, y: 0 }}  // start from right
                style={styles.button}
              >
                <Text style={styles.menuText}>Math</Text>
              </LinearGradient>
              </Pressable>
          </ScrollView>
        </View>
      
  {/*one of the event buttons*/}
        <View style={styles.eventsContainer}>
            <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryText}>      
                    Upcoming Events  
                </Text>
            </View>
      
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
          <Text style={[styles.categoryText,]}>
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

  categoryTextContainer: {
    padding: 30, 
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -31,
  },


  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 25,
    marginHorizontal: 8,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },

  eventsButton: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 25,
    width: 260,
    height: 250,
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

  

  categoryText: {
    fontSize: 19,
    color: "black",
    fontWeight: "500",
  },

  menuText: {
    color: "white",
    fontSize: 15, 
    fontWeight: "bold"
  }


});
