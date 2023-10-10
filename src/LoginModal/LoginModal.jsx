import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, sendEmailVerification, auth } from "../auth";
import { updateProfile } from "firebase/auth";

function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);

      const user = auth.currentUser;

      navigate("/");
    } catch (error) {
      console.error("login error:", error.message);
      setLoginError(error.message);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Log in with email</h1>
        <form onSubmit={(e) => handleLogin(e)}>
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
          <button type="submit"> Done </button>
        </form>
        {loginError && <p>Error: {loginError}</p>}
        <button onClick={onClose}> Exit </button>
      </div>
    </div>
  );
}

export default LoginModal;
