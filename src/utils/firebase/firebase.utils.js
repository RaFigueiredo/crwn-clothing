import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAllnvIhZbhFyjOFXkRWftRAeUPmDO4FHg",
    authDomain: "crwn-clothing-db-fcba6.firebaseapp.com",
    projectId: "crwn-clothing-db-fcba6",
    storageBucket: "crwn-clothing-db-fcba6.appspot.com",
    messagingSenderId: "329055090247",
    appId: "1:329055090247:web:32033ab65bbe02f5476362"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
        }
    }
};