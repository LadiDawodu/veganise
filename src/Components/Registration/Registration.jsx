import React, { useState } from "react";

import { signUp } from "../../auth.jsx";

import RegistrationModal from "./RegistrationModal.jsx";

function Registration() {
  const [isOpen, setIsOpen] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);

      alert("SignUp successful");

      setIsOpen(false);
    } catch (error) {
      console.error("signup error:", error.message);
      setRegistrationError(error.message);
    }
  };

  return (
    <div className="registration">
      <form onSubmit={(e) => handleRegistration(e)}>
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
      {registrationError && <p> Error:{registrationError}</p>}
      <button onClick={toggleModal}></button>
      <RegistrationModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}

export default Registration;