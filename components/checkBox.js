import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => setChecked(!checked)}
      >
        {checked ? (
          <Icon name="check-square" size={25} color="grey" />
        ) : (
          <Icon name="square-o" size={25} color="grey" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 2,
  },
});

export default CustomCheckbox;
