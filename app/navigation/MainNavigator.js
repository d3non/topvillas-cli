import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

/*import {
  NotificationsScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen,
} from "../screens";*/

import NotificationsScreen from "../screens/NotificationsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

import SideBar from "../components/SideBar";
import { createStackNavigator } from "@react-navigation/stack";
import { Notifications } from "expo";

const navOptionHandler = (navigation) => ({
  header: null,
});

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Tab,
      navigationOptions: navOptionHandler,
    },

    Notifications: {
      screen: Notifications,
      navigationOptions: navOptionHandler,
    },
  },
  { initialRouteName: "Home" }
);

const DrawerNavigator = createDrawerNavigator(
  {
    drawer: MainStack,
  },
  {
    contentComponent: SideBar,

    // Notifications: {
    //   screen: NotificationsScreen,
    //   navigationOptions: {
    //     title: "Notificaciones ",
    //     drawerIcon: ({ tintColor }) => (
    //       <MaterialIcons
    //         name="notifications-none"
    //         size={16}
    //         color={tintColor}
    //       />
    //     ),
    //   },
    // },
    //   MessageScreen: {
    //     screen: MessageScreen,
    //     navigationOptions: {
    //       title: "Message",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="message-square" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //   ActivityScreen: {
    //     screen: ActivityScreen,
    //     navigationOptions: {
    //       title: "Activities",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="activity" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //   ListScreen: {
    //     screen: ListScreen,
    //     navigationOptions: {
    //       title: "Lists",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="list" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //   ReportScreen: {
    //     screen: ReportScreen,
    //     navigationOptions: {
    //       title: "Reports",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="bar-chart" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //   StatisticScreen: {
    //     screen: StatisticScreen,
    //     navigationOptions: {
    //       title: "Statistics",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="trending-up" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //   SignOutScreen: {
    //     screen: SignOutScreen,
    //     navigationOptions: {
    //       title: "SignOut",
    //       drawerIcon: ({ tintColor }) => (
    //         <Feather name="log-out" size={16} color={tintColor} />
    //       ),
    //     },
    //   },
    //},
    //{
    //  contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,
    //rgba(212, 118, 207, 0.2)
    contentOptions: {
      activeBackgroundColor: "#F6820D",
      activeTintColor: "#fff",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        boderRadius: 4,
      },
    },
  }
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default createAppContainer(DrawerNavigator);
