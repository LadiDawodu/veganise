import React, { useState } from "react";

import { signUp, sendEmailVerification } from "../../auth.jsx";
import { useNavigate } from "react-router-dom";


function Registration({ isOpen, onClose }) {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [registrationError, setRegistrationError] = useState(null);
    const history = useNavigate();
  
  const handleRegistration = async () => {
      try {
          const user = await signUp(formData.email, formData.password);

          await user.sendEmailVerification();

          history.push("/");

          
        } catch (error) {
            console.error("registration error:", error.message);
            setRegistrationError(error.message);
        }
        
    }
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value})}
            required
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value})}
            required
          />
        </div>
        <button type="submit"> Sign Up</button>
      </form>
      {registrationError && <p> Error:{registrationError}</p>}
    </div>
  );
};

export default Registration;
