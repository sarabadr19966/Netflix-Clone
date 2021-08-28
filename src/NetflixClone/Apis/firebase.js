import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCzg323mDw_I3gP6BbPdjnIV85q9J9H1ek",
    authDomain: "netflix-clone-6729f.firebaseapp.com",
    projectId: "netflix-clone-6729f",
    storageBucket: "netflix-clone-6729f.appspot.com",
    messagingSenderId: "953590294941",
    appId: "1:953590294941:web:0557a058ee9647c44c2774"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export default db;
  export {auth};
