import { useState } from "react";

function Email({ email, setEmail }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function handleInput(event) {
    const email = event.target.value;
    setEmail(email);

    if (!email) {
      setAlertMessage("Email is required");
      setShowAlert(true);
    } else {
      setAlertMessage("");
      setShowAlert(false);
    }
  }

  function handleBlur(event) {
    const email = event.target.value;
    setEmail(email);

    if (email && !email.includes('@')) {
      setAlertMessage("Email must include @");
      setShowAlert(true);
    } else {
      setAlertMessage("");
      setShowAlert(false);
    }
  }

  return (
    <div className="field-container">
      <label htmlFor="email">* Email: </label>
      <input
        className="email"
        type="text"
        id="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleInput}
        onBlur={handleBlur}
      />
      {showAlert && <p className="alert-message">{alertMessage}</p>}
    </div>
  );
}

export default Email;
