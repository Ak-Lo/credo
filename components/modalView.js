import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  TextInput,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SMSPinInput from "./smsPinInput";

// import for testing retrieved password from SECURE STORE
import * as SecureStore from "expo-secure-store";

// import { getValueFromSecureStoreFor } from '../utils/Helper';

const ModalView = ({ modalVisible, setModalVisible, children, password }) => {
  ///////////////////////////////////// RETRIEVING STORED PASSWORD\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // const [test, setTest] = useState('')

  // async function getValueFromSecureStoreFor(key){

  //   let res = await SecureStore.getItemAsync(key)

  //   if(res){
  //     setTest(res)
  //   }else {
  //     alert('invalid key')
  //   }
  // }

  ///////////////////////////////////// RETRIEVING STORED PASSWORD\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 70) {
          setModalVisible(false);
        }
      },
    }),
  ).current;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(true)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent} {...panResponder.panHandlers}>
          <View style={styles.closeBar}></View>
          <Text style={styles.systemLogin}>სისტემაში შესვლა</Text>

          {/* ///////////////////////////////////// RETRIEVING STORED PASSWORD\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

          {/* <Button
        title='save'
        onPress={() => {
          getValueFromSecureStoreFor('passKey')
        }}
        />        
        <Text>{test}</Text> */}

          {/* ///////////////////////////////////// RETRIEVING STORED PASSWORD\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

          <View style={[styles.closeButtonContainer, { top: 10, right: 10 }]}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>
                <AntDesign name="close" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.line}></View>
          <View style={styles.modalBodyContainer}>
            <View style={styles.content}>
              <Text style={styles.text}>შეიყვანეთ 4 ნიშნა კოდი</Text>
              <Text style={styles.text}>
                რომელიც გამოიგიგზავნეთ:
                <View style={styles.phoneNumberContainer}>
                  <Text style={styles.phoneNumber}>+995123456</Text>
                </View>
              </Text>
              <SMSPinInput
                password={password}
                setModalVisible={setModalVisible}
              />
              <Text style={styles.text}>არ მიგიღიათ კოდი?</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>გაგრძელება</Text>
              </TouchableOpacity>
            </View>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 300,
  },
  closeBar: {
    position: "absolute",
    height: 4,
    width: 70,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    top: -20,
    borderRadius: 3,
  },
  systemLogin: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ECECEC",
    padding: 5,
  },
  closeButton: {
    position: "absolute",
  },
  closeButtonText: {
    fontSize: 20,
    color: "#000",
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    width: "100%",
    marginTop: 20,
  },

  modalBodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  phoneNumberContainer: {
    marginLeft: 5,
    // marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#74D0F1",
    paddingLeft: 10,
    paddingRight: 10,
  },
  phoneNumber: {
    textAlign: "center",
    color: "white",
  },
  phoneNumber: {
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "#FF5733",
    borderRadius: 10,
    width: 200,
    height: 50,
    paddingTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    margin: "auto",
    paddingBottom: 5,
  },
});

export default ModalView;
