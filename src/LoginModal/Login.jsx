import React, { useState } from "react";

import { signIn } from "../../auth.jsx";

import LoginModal from "./LoginModal.jsx";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async () => {
    try {
      const user = await signIn(formData.email, formData.password);
      console.log("hmmmmmm");

      await user.sendEmailVerification();

      alert("SignUp successful");

      setIsOpen(false);
    } catch (error) {
      console.error("signup error:", error.message);
      setLoginError(error.message);
    }
  };

  return (
    <div className="registration">
      <h1>Log in with email</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit"> Sign Up</button>
      </form>
      {loginError && <p> Error:{loginError}</p>}
      <button onClick={toggleModal}></button>
      <LoginModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}

export default Login;
