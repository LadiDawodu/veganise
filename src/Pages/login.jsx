import React, { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const login = () => {
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loginError, setLoginError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword (auth, email, password)
        } 
        catch(error){
            console.error("Login error:", error.message);
            setLoginError(error.message);
        }
    }


  return (
    <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'></button>

        </form>
        {loginError && <p className='error'>{loginError}</p>}
    </div>
  )
}

export default login