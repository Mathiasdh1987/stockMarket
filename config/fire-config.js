import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC8k3ElT6YO3R_YFaO7NUUzQM6GjO5Fyfc',
  authDomain: 'stockmarket-5b2e5.firebaseapp.com',
  projectId: 'stockmarket-5b2e5',
  storageBucket: 'stockmarket-5b2e5.appspot.com',
  messagingSenderId: '864643091770',
  appId: '1:864643091770:web:6dec50ce465c0d5c351403',
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
