import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LandingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.title}>CREDO BANK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "100%",
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: "10px",
    marginTop: "5px",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5733",
  },
});

export default LandingView;
