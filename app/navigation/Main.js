import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CustomDrawerContent } from "../components/CustomDrawerContent";
import SideBar from "../components/SideBar";
//import {HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail} from './src/tab'
import NotificationsScreen from "../screens/NotificationsScreen";
import NotificationsDetailScreen from "../screens/NotificationsDetailScreen";
//import { RegisterScreen, LoginScreen } from "./src/auth";
//import { IMAGE } from "../assets";

//const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

// const StackHome = createStackNavigator();

// function HomeStack({ navigation, route }) {
//   if (
//     route.state &&
//     route.state.routeNames[route.state.index] === "HomeDetail"
//   ) {
//     navigation.setOptions({ tabBarVisible: false });
//   } else {
//     navigation.setOptions({ tabBarVisible: true });
//   }
//   return (
//     <StackHome.Navigator initialRouteName="Home">
//       <StackHome.Screen
//         name="Home"
//         component={HomeScreen}
//         options={navOptionHandler}
//       />
//       <StackHome.Screen
//         name="HomeDetail"
//         component={HomeScreenDetail}
//         options={navOptionHandler}
//       />
//     </StackHome.Navigator>
//   );
// }

// const StackSetting = createStackNavigator();

// function SettingStack({ navigation, route }) {
//   if (route.state && route.state.index > 0) {
//     navigation.setOptions({ tabBarVisible: false });
//   } else {
//     navigation.setOptions({ tabBarVisible: true });
//   }
//   return (
//     <StackSetting.Navigator initialRouteName="Setting">
//       <StackSetting.Screen
//         name="Setting"
//         component={SettingsScreen}
//         options={navOptionHandler}
//       />
//       <StackSetting.Screen
//         name="SettingDetail"
//         component={SettingsScreenDetail}
//         options={navOptionHandler}
//       />
//     </StackSetting.Navigator>
//   );
// }

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOME_BLACK;
//           } else if (route.name === "Settings") {
//             iconName = focused
//               ? IMAGE.ICON_SETTINGS
//               : IMAGE.ICON_SETTINGS_BLACK;
//           }

//           // You can return any component that you like here!
//           return (
//             <Image
//               source={iconName}
//               style={{ width: 20, height: 20 }}
//               resizeMode="contain"
//             />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "red",
//         inactiveTintColor: "black",
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeStack} />
//       <Tab.Screen name="Settings" component={SettingStack} />
//     </Tab.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

//<Drawer.Screen name="MenuTab" component={TabNavigator} />
function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      //initialRouteName="MenuTab"
      drawerContent={(props) => <SideBar {...props} />}
    >
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen
        name="NotificationsDetailScreen"
        component={NotificationsDetailScreen}
      />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();

//          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
//          <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackApp.Navigator initialRouteName="Login">
//         <StackApp.Screen
//           name="HomeApp"
//           component={DrawerNavigator}
//           options={navOptionHandler}
//         />
//       </StackApp.Navigator>
//     </NavigationContainer>
//   );
// }

const MainNavigator = () => (
  <StackApp.Navigator>
    <StackApp.Screen
      name="HomeApp"
      component={DrawerNavigator}
      //options={{ headerShown: false }}
      options={navOptionHandler}
    />
  </StackApp.Navigator>
);

export default MainNavigator;
