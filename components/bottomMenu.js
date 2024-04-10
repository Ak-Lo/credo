import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Operations from "../screens/Operations";
import Locations from "../screens/Locations";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function BottomMenu() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#FF5733",
        }}
      >
        <Tab.Screen
          name="მთავარი"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={20}
                color={focused ? "#FF5733" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ოპერაციები"
          component={Operations}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="straighten"
                size={20}
                backgroundColor={'red'}
                color={focused ? "#FF5733" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ლოკაციები"
          component={Locations}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="location"
                size={20}
                color={focused ? "#FF5733" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="კონტაქტი"
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="phone"
                size={20}
                color={focused ? "#FF5733" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    height: 80,
    paddingBottom: 20,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFF5EE",
  },
});

export default BottomMenu;
