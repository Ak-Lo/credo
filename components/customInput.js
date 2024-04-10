import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import CheckBox from '@react-native-community/checkbox';
import CustomCheckbox from "./checkBox";

const CustomInput = ({ placeholder, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const [isChecked, setIsChecked] = useState(false);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ["gray", "#888"],
    }),
  };

  return (
    <View style={[styles.innerContainer]}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          value={text}
          textAlignVertical="center"
          textContentType={
            props.secureTextEntry ? "newPassword" : props.secureTextEntry
          }
          secureTextEntry={showPassword}
        />
        {props.checkBox && <CustomCheckbox />}
        {props.secureTextEntry && (
          <View>
            <Pressable
              style={{ width: 24 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <Icon name="eye-outline" color={"gray"} size={24} />
              ) : (
                <Icon name="eye-off-outline" color={"gray"} size={24} />
              )}
            </Pressable>
          </View>
        )}
      </View>
      {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  label: {
    position: "absolute",
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
    outlineStyle: "none",
    width: "100%",
    color: "white",
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },
});

export default CustomInput;
