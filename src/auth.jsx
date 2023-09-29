import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth();

const signIn = async (email, password) => {

    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        const user = userCredential.user

        return user
    }
    catch(error){
        console.error('login error:', error)
        throw error
    }
}

export {signIn};