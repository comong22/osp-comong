// import firebase from "firebase/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBf0ZjhadxKNtFvTJfL-daI1Ofd72F-cr0",
  authDomain: "osp-comong.firebaseapp.com",
  projectId: "osp-comong",
  storageBucket: "osp-comong.appspot.com",
  messagingSenderId: "634449059761",
  appId: "1:634449059761:web:8199305587c9d211a9e790",
  measurementId: "G-ZRNHF8B8LG",
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
export default {app};
// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);
