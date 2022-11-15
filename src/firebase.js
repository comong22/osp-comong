import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBf0ZjhadxKNtFvTJfL-daI1Ofd72F-cr0",
    authDomain: "osp-comong.firebaseapp.com",
    projectId: "osp-comong",
    storageBucket: "osp-comong.appspot.com",
    messagingSenderId: "634449059761",
    appId: "1:634449059761:web:8199305587c9d211a9e790",
    measurementId: "G-ZRNHF8B8LG"

};

export default firebase.initializeApp(firebaseConfig); // index.js에서 사용을 위함