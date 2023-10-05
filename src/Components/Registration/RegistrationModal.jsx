import React from "react";

function RegistrationModal({ isOpen, onClose, registrationError }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleRegistration}>
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
        {registrationError && <p>Error: {registrationError}</p>}
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}

export default RegistrationModal;
