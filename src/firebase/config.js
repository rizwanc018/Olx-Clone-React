import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCVMGwBHCpYQjlmRIA-YLo3oV_iEAEWmXM",
    authDomain: "olx-clone-2f9e4.firebaseapp.com",
    projectId: "olx-clone-2f9e4",
    storageBucket: "olx-clone-2f9e4.appspot.com",
    messagingSenderId: "1058504317340",
    appId: "1:1058504317340:web:239dfc172c98269cccd059",
    measurementId: "G-HNK4T5Y9YQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

// const {
//     REACT_APP_FIREBASE_API_KEY,
//     REACT_APP_AUTH_DOMAIN,
//     REACT_APP_DATABASE_URL,
//     REACT_APP_PROJECT_ID,
//     REACT_APP_STORAGE_BUCKET,
//     REACT_APP_MESSAGING_SENDER_ID,
//     REACT_APP_APP_ID,
//     REACT_APP_MEASUREMENT_ID,
// } = process.env;

// export const firebaseConfig = {
//     apiKey: REACT_APP_FIREBASE_API_KEY,
//     authDomain: REACT_APP_AUTH_DOMAIN,
//     databaseURL: REACT_APP_DATABASE_URL,
//     projectId: REACT_APP_PROJECT_ID,
//     storageBucket: REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
//     appId: REACT_APP_APP_ID,
//     measurementId: REACT_APP_MEASUREMENT_ID,
// };