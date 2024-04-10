import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import CustomInput from "./customInput";
// import BottomMenu from './bottomMenu';

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveUser, setSaveUser] = useState(false);

  const handleLogin = () => {
    // Your login logic here
    console.log("Logging in");
  };

  const handleForgotPassword = () => {
    // Your forgot password logic here
    console.log("Forgot password");
  };

  const handleCreateAccount = () => {
    // Your create account logic here
    console.log("Create new account");
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CustomInput
          //   containerStyle={{ marginHorizontal: 20, width: '100%' }}
          placeholder={"მომხმარებელი"}
          onChangeText={setEmail}
          checkBox={true}
        />
        <CustomInput
          placeholder={"პაროლი"}
          //   containerStyle={{ marginHorizontal: 20, marginTop: 10, width: '100%' }}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>დაგავიწყდა მონაცემები?</Text>
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
      </View>
      {/* <BottomMenu /> */}
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
    width: "100%",
    backgroundColor: "white",
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
});

export default LoginView;
