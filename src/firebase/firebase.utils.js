import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBRNNlSxfJ7njzP8IjC47Aw11oeAGiq19M",
    authDomain: "crwn-db-73527.firebaseapp.com",
    databaseURL: "https://crwn-db-73527.firebaseio.com",
    projectId: "crwn-db-73527",
    storageBucket: "crwn-db-73527.appspot.com",
    messagingSenderId: "233581394822",
    appId: "1:233581394822:web:15b9f53d856bfdd8990a07",
    measurementId: "G-965J0Z5S4T"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }

       
    }
    return userRef
    

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
