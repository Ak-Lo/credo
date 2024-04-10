import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
} from "react-native";
import CustomInput from "../components/customInput";
import ModalView from "../components/modalView";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    setModalVisible(!modalVisible);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
  };

  const handleCreateAccount = () => {
    console.log("Create new account");
  };

  return (
    <ImageBackground
      source={require("../assets/credo1.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <>
        <View style={styles.container}>
          <View style={styles.welcomeContainerHome}>
            <Image
              source={require("../assets/favicon.png")}
              style={styles.logo}
            />
            <Text style={styles.homeHeader}>CREDO BANK</Text>
          </View>

          <Text style={styles.systemLoginText}>სისტემაში შესვლა</Text>
          <CustomInput
            placeholder={"მომხმარებელი"}
            onChangeText={setEmail}
            checkBox={true}
          />
          <CustomInput
            placeholder={"პაროლი"}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>
              დაგავიწყდა მონაცემები?
            </Text>
          </Pressable>
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>შესვლა</Text>
          </Pressable>
          <Pressable
            style={styles.createAccountButton}
            onPress={handleCreateAccount}
          >
            <Text style={styles.createAccountText}>შექმენი ახალი ანგარიში</Text>
          </Pressable>
          <ModalView
            password={password}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // backgroundColor: "#fff",
  },
  welcomeContainerHome: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 50,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  checkboxText: {
    color: "#007bff",
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  visibilityToggle: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  forgotPasswordText: {
    alignSelf: "flex-start",
    marginBottom: 10,
    color: "#007bff",
  },
  loginButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    height: 45,
    width: "100%",
  },
  createAccountButton: {
    backgroundColor: "#FFF5EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    height: 45,
    width: "100%",
    marginBottom: 150,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
  createAccountText: {
    color: "#FF5733",
    fontWeight: "500",
    textAlign: "center",
  },
  homeHeader: {
    color: "#FF5733",
    fontSize: 24,
  },
  systemLoginText: {
    marginBottom: 50,
    fontSize: 20,
    color: "#FF5733",
  },
});

export default Home;
