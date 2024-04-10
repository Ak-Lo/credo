import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { storePasswordInKeystore } from "../utils/Helper"; // KEY STORE
import { saveInSecureStore } from "../utils/Helper"; // SECURE STORE

const SMSPinInput = ({ setModalVisible, password }) => {
  const [pin, setPin] = useState("");

  const handleChangeText = (pin) => {
    // console.log(pin)
    setPin(pin);
    setModalVisible(false);
    if (pin === "1234" && password !== "") {
      saveInSecureStore("passKey", password);
    }
  };

  return (
    <View style={styles.container}>
      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        value={pin}
        autoFocusOnLoad
        code={pin}
        onCodeChanged={(code) => setPin(code)}
        secureTextEntry={true}
        codeInputFieldStyle={styles.codeInputFieldStyle}
        placeholderCharacter="-"
        // codeInputHighlightStyle={styles.codeInputHighlightStyle}
        onCodeFilled={(code) => handleChangeText(code)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otpInput: {
    width: "80%",
  },
  codeInputFieldStyle: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginLeft: 5,
    fontSize: 18,
    color: "#000",
    borderWidth: 0,
    backgroundColor: "#ECECEC",
  },
  codeInputHighlightStyle: {
    // outlineStyle: 'none',
  },
});

export default SMSPinInput;
