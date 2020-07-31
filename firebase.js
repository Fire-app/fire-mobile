import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyCkVOfQKEUrj5G-GtaywGZvef5_vGA31LI",
  authDomain: "fire-expo-db.firebaseapp.com",
  databaseURL: "https://fire-expo-db.firebaseio.com/",
  projectId: "fire-expo-db",
  storageBucket: "fire-expo-db.appspot.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const addToken = (token) => {
  firebase
    .database()
    .ref("tokens/" + "1")
    .set({
      pushToken: token,
    });
};

export default firebase;
