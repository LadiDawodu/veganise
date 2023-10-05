import {auth  } from './firebase.jsx'
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth'

const signUp = async (email, password) => {

    try{
        const userCredential = await createUserWithEmailAndPassword (auth,email,password)
        const user = userCredential.user

        await sendEmailVerification(auth.currentUser)

        return user
    }
    catch(error){
        console.error('registration error:', error)
        throw error
    }
}

export {signUp, auth, sendEmailVerification};