// import React from "react";

// import Screen from "./screen";
// import useAuth from "../auth/useAuth";

// import Notifications from "../screens/NotificationsScreen";
/*export const NotificationsScreen = ({ navigation }) => {
  return navigation.navigate("NotificationsScreen");
};*/

// export const NotificationsScreen = ({ navigation }) => (
//   <Screen
//     navigation={navigation}
//     name="NotificationsScreen"
//     screen={<Notifications />}
//   />
// );
// export const MessageScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="Message" />
// );
// export const ActivityScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="Activity" />
// );
// export const ListScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="List" />
// );
// export const ReportScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="Report" />
// );
// export const StatisticScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="Statistic" />
// );
// /*export const SignOutScreen = ({ navigation }) => (
//   <Screen navigation={navigation} name="SignOut" />
// );*/

// export const SignOutScreen = ({ navigation }) => {
//   const { user, logOut } = useAuth();
//   logOut();
//   return navigation.navigate("WelcomeScreen");
// };

export * from "./NotificationsScreen";
export * from "./ListingDetailsScreen";
