import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Login</h1>;
            <button onClick={logGoogleUser}>Acessar com o Google</button>
        </div>
    );
};

export default SignIn;