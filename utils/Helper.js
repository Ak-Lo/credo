import { RNKeyStore } from "react-native-secure-key-store";
import * as SecureStore from "expo-secure-store";

////////////////////////////////////////// KEY STORE//////////////////////////////////

const storePasswordInKeystore = async (password) => {
  try {
    RNKeyStore.initialize();
    console.log(password);
    await RNKeyStore.set("password", password);
    console.log("SUCCESS");
    return true;
  } catch (error) {
    console.error("NO SUCCESS", error);
    return false;
  }
};

const retrievePasswordFromKeystore = async () => {
  try {
    const password = await RNKeyStore.get("password");
    if (password) {
      console.log("RETRIEVED PASS", password);
      return password;
    } else {
      console.log("No PASS FOUND");
      return null;
    }
  } catch (error) {
    console.error("SOME ERROR", error);
    return null;
  }
};

const deletePasswordFromKeystore = async () => {
  try {
    await RNKeyStore.remove("password");
    console.log("Password deleted from Keystore.");
    return true;
  } catch (error) {
    console.error("Error", error);
    return false;
  }
};

////////////////////////////// SECURE STORE////////////////////////////

async function saveInSecureStore(key, value) {
  try {
    let res = await SecureStore.setItemAsync(key, value);
  } catch (err) {
    console.error(err);
  }
}

export {
  storePasswordInKeystore,
  retrievePasswordFromKeystore,
  deletePasswordFromKeystore,
  saveInSecureStore,
};
