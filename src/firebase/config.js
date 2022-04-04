import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBx1VGb60ZFg0Dn60qmxoQRUav3Xl07MQ",
  authDomain: "reactpractice-firegram.firebaseapp.com",
  projectId: "reactpractice-firegram",
  storageBucket: "reactpractice-firegram.appspot.com",
  messagingSenderId: "713298764227",
  appId: "1:713298764227:web:5cc9a25f68a1e831d0dd76",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp= firebase.firestore.FieldValue.serverTimestamp()

export { projectStorage, projectFirestore ,timestamp};
