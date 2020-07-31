import * as firebase from 'firebase';

import {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
} from './secrets';

// Config firebase
const config = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Tokens not saved in store for security layer
const getAllTokens = function () {
  const query = firebase.database().ref('/tokens').orderByKey();
  const tokenLists = [];

  return query.once('value').then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const { key } = childSnapshot;
      const childData = childSnapshot.val();
      tokenLists.push(childData.pushToken);
    });

    return tokenLists;
  });
};

// When token is generated, add token (if new) to firebase
export const addToken = async (token) => {
  getAllTokens().then((tokenLists) => {
    if (!tokenLists.includes(token)) {
      const uuid = new Date().getTime();
      firebase.database().ref(`tokens/${uuid}`).set({
        pushToken: token,
      });
    }
  });
};

export default firebase;
