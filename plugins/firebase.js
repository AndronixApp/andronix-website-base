import firebase from 'firebase'

let app
const config = {
  apiKey: 'AIzaSyBvHOXLIFJZZsFdVCjxP3XLP_tw6n5BdW8',
  authDomain: 'andronix-techriz.firebaseapp.com',
  databaseURL: 'https://andronix-techriz.firebaseio.com',
  projectId: 'andronix-techriz',
  storageBucket: 'andronix-techriz.appspot.com',
  messagingSenderId: '83697300023',
  appId: '1:83697300023:web:1e5962e3c087affb9a45b2',
  measurementId: 'G-J4235J74QY'
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config)

/* Inint firebase analytics */
app.analytics()

export const firestore = app.firestore()
export const database = app.database()
export const functions = app.functions()
export const auth = app.auth()
