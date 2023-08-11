import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const numUpdates = 1;

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the HomeScreen</Text>
    </View>
  );

}

function SettingsScreen({navigation}) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the SettingsScreen</Text>
    </View>
  );

}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'> 
        {/* <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
           
          }} />
        <Drawer.Screen name="Settings" component={SettingsScreen}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }} /> */}
        <Drawer.Screen name="Tab" component={TabNavigator}/>
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
