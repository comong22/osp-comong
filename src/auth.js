import { auth } from "./firebase";

export function signUp(email, password) { // 회원가입
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) { // 로그인
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout() { // 로그아웃
    return auth().signOut();
  }