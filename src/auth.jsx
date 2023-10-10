import { auth } from "./firebase.jsx";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "./firebase.jsx";

const signUp = async (email, password, firstName, lastName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      await db.ref(`user/$user.uid`).set({
        firstName: firstName,
        lastName: lastName,
      });

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await sendEmailVerification(auth.currentUser);
    }
    alert("You have successfully signed up");

    return user;
  } catch (error) {
    console.error("registration error", error);
    throw error;
  }
};

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential;

    alert("You have successfuly logged in");

    return user;
  } catch (error) {
    console.error("login error:", error);
    throw error;
  }
};

export { signUp, signIn, auth, sendEmailVerification };
