import { initializeApp } from 'firebase/app'; 
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateEmail, sendEmailVerification } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC_QxXVS2hlhxokNHsfRw2W24xT_BgJ7lI",
    authDomain: "user-auth-learnix.firebaseapp.com",
    projectId: "user-auth-learnix",
    storageBucket: "user-auth-learnix.appspot.com",
    messagingSenderId: "984610844374",
    appId: "1:984610844374:web:6c96b69b50c52e8058e377",
    measurementId: "G-KWJ5DLK0C8"
})

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;

sendEmailVerification(auth.currentUser)
    .then(() => {
        // Email verification sent!
        // ...
    })

updateEmail(auth.currentUser, 'user@example.com').then(() => {
    // Email updated!
  // ...
}).catch((error) => {
    // An error occurred
    // ...
  });

updateProfile(auth.currentUser, {
    displayName: 'Jane Q. User', photoURL: 'https://example.com/jane-q-user/profile.jpeg'
}).then(() => {
    // Profile updated!
    // ...
}).catch((error) => {
    // An error occurred
    // ...
})

if (user !== null) {
    user.providerData.forEach((profile) => {
        console.log('Sign-in provider:' + profile.providerId);
        console.log('Provider-specific UID ' + profile.uid);
        console.log('Name:' + profile.displayName);
        console.log('Email:' + profile.email)
        console.log('Photo URL:' + profile.photoURL)
    })
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL
    const emailVerified = user.emailVerified

    const uid = user.uid;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ..
    } else {
        // User is signed out
        // ..
    }
})
signOut(auth).then(() => {
    // Sign out successful.
    console.log('log out successful')
}).catch((error) => {
    // An error happened
    console.log('unable to log out')
})

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })