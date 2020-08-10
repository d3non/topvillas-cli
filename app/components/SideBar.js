import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import styles from "../config/styles";
import useAuth from "../auth/useAuth";

function SideBar(props) {
  const { user, logOut } = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require("../assets/Venetto.jpg")}
        style={{ width: undefined, padding: 16, paddingTop: 48 }}
      >
        <View
          style={{
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/logovilla.jpg")}
            style={styles.profile}
          />
          <Text style={styles.name}>Villa Venetto </Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.followers}>999 Followers</Text>
            <Ionicons
              name="md-people"
              size={16}
              color="rgba(255, 255, 255, 0.8)"
            />
          </View>
        </View>
      </ImageBackground>
      <View>
        <DrawerItem
          style={{ marginLeft: 5, marginTop: 20 }}
          icon={() => (
            <MaterialIcons name="notifications-none" size={24} color="black" />
          )}
          label="Notificaciones  "
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          style={{ marginLeft: 5 }}
          icon={() => (
            <MaterialIcons name="attach-money" size={24} color="black" />
          )}
          label="Mis Pagos  "
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          style={{ marginLeft: 5 }}
          icon={() => (
            <MaterialIcons name="people-outline" size={24} color="black" />
          )}
          label="Visitas  "
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          style={{ marginLeft: 5 }}
          icon={() => <Feather name="shopping-cart" size={24} color="black" />}
          label="Tienda  "
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          style={{ marginLeft: 5 }}
          icon={() => (
            <MaterialCommunityIcons
              name="contact-phone-outline"
              size={24}
              color="black"
            />
          )}
          label="Directorio   "
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          style={{ marginLeft: 5 }}
          icon={() => <FontAwesome5 name="first-aid" size={24} color="black" />}
          label="Números de emergencia   "
          onPress={() => props.navigation.navigate("Notifications")}
        />
      </View>
      <DrawerItem
        style={{ marginLeft: 5 }}
        icon={() => (
          <MaterialCommunityIcons name="logout" size={24} color="black" />
        )}
        label="Salir"
        onPress={() => logOut()}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
  followers: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginRight: 4,
  },
});

export default SideBar;
