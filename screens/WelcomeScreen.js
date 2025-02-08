import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, Pressable, Button, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../store/auth-context';
import IconButton from '../components/ui/IconButton';



// Dummy screens for each tab
function TrackMeScreen() {
  return (
    <LinearGradient colors={['#7a0542', '#ddb52f']} style={styles.rootScreen}>
    <View style={styles.screenContainer}>
      <Text style={styles.header}>Track me</Text>
      <Text style={styles.describe}>Share Live location with your friends</Text>
     <Pressable style={styles.btn}>
     <Text style={styles.btntext}>Add friends</Text>
     </Pressable>
     
      
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track My Location</Text>
        </TouchableOpacity>
      </View>

    </View>
    </LinearGradient>
  );
}

function SosButtonScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>SOS Button Activated</Text>
    </View>
  );
}

function FakeCallScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Fake Call Functionality</Text>
    </View>
  );
}

function HelplineRecordScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Helpline Records</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();

function WelcomeScreen() {
  const authCtx = useContext(AuthContext)
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#7a0542', '#ddb52f']} style={styles.rootScreen}>
      <View style={styles.rootContainer}>
        <Image
          source={require('../assets/images/logonb.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Nari Shakti</Text>
        <IconButton icon="exit" color={'#ddb52f'} size={32} style={styles.logimg} onPress={authCtx.logout} />
        <Pressable style={styles.logimg}>
          <Ionicons name="notifications" size={32} color={'#ddb52f'} />
        </Pressable>
        <Pressable style={styles.setimg} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-sharp" size={32} color={'#ddb52f'} />
        </Pressable>
      </View>


      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.iconName === 'Track Me') {
              iconName = 'location-outline';
            } else if (route.name === 'SOS Button') {
              iconName = 'alert-circle-outline';
            } else if (route.name === 'Fake Call') {
              iconName = 'call-outline';
            } else if (route.name === 'Helpline') {
              iconName = 'help-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ddb52f',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: styles.tabBar, // Apply custom tab bar style here
        })}
      >
        <BottomTab.Screen name="Track Me" 
           component={TrackMeScreen} 
            options={{
            headerShown:false,
           }} />
        <BottomTab.Screen name="SOS Button" component={SosButtonScreen}

         />
        <BottomTab.Screen name="Fake Call" component={FakeCallScreen} />
        <BottomTab.Screen name="Helpline" component={HelplineRecordScreen} />
      </BottomTab.Navigator>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
     // Add margin to create some space between the top section and the horizontal line
  },
  logo: {
    width: 80,
    height: 80,
   marginTop:45

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:45
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#7a0542',
    padding: 10,
    borderRadius: 5,
  },
  trackButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  screenContainer: {
    flex: 1,
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddb52f',
    marginVertical: 10,
    borderRadius: 10,
  },
container:{
    flex:1,
},
header:{
  flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',

},
mapContainer: {
  flex: 1,
},
map: {
  ...StyleSheet.absoluteFillObject,
},

  logimg: {
    marginTop: 45,
    marginLeft: 20,
  },
  setimg: {
    marginTop: 45,
    marginLeft: 20,
  },
  tabBar: {
    backgroundColor: '#7a0542', // Custom background color for the tab bar
   height:80 // Border color
  },
  header:{
    fontSize:25,
    color:'#ddb52f',
    marginTop:10,
    marginLeft:10
  },
  describe:{
     margin:10,
     color:'beige'
  },
  btn:{
    borderRadius: 6,
    borderColor:'#ddb52f',
    borderWidth: 2,
    width:150,
     height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:25,
    color:'white',
    backgroundColor:'#7a0542',
     marginLeft:120
    },
    btntext:{
      fontSize:17,
      color:'#ddb52f',
    }
});

export default WelcomeScreen;
