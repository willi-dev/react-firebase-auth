import { auth } from './firebase';

// sign up
export const doCreateUserWithEmailAndPassword = (email, password) => 
  auth.createUserWithEmailAndPassword(email, password);

// sign in
export const doSignInWithEmailAndPassword = (email, password) => 
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();

export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) => 
  auth.currentUser.updatePassword(password);