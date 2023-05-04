import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'




const firebaseConfig = {
  apiKey: "AIzaSyATJZgoJtjyRYQyoYhZzDmajZckFHA4WNo",
  authDomain: "registerddata.firebaseapp.com",
  projectId: "registerddata",
  storageBucket: "registerddata.appspot.com",
  messagingSenderId: "488275521434",
  appId: "1:488275521434:web:a905cb8082a60ee63cd423",
  measurementId: "G-1J771QH43X"
  };

  let app;

  if(firebase.apps.length === 0) {

    app = firebase.initializeApp(firebaseConfig);

  }else{

    app = firebase.app();

  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};