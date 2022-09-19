import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtwDWoh-El_gadQ1jVq7d8IYo2uv0qQ6w",
    authDomain: "fashguru-5d258.firebaseapp.com",
    databaseURL: "https://fashguru-5d258-default-rtdb.firebaseio.com",
    projectId: "fashguru-5d258",
    storageBucket: "fashguru-5d258.appspot.com",
    messagingSenderId: "643109251711",
    appId: "1:643109251711:web:6822f4695215c90ecf6d4a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};