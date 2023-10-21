import React from "react";
import CounterPage from "./src/pages/CounterPage";
import LogInPage from "./src/pages/LogInPage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./src/pages/SettingsPage";
import NationalizePage from "./src/pages/NationalizePage";


const stack = createStackNavigator();

const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return(
    <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Counter" component={CounterPage}/>
        <stack.Screen name="Login" component={LogInPage}/>
    </stack.Navigator>
  )
}

const App = () =>{
  return(
    <NavigationContainer>
      <bottom_tab.Navigator>
        <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen}/>
        <bottom_tab.Screen name="Settings" component={SettingsPage}/>
        <bottom_tab.Screen name="Nationality" component={NationalizePage}/>
      </bottom_tab.Navigator>
    </NavigationContainer>
  )
}

export default App;