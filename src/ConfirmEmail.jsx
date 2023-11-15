import { useState } from "react";

function ConfirmEmail({ confirmEmail, email, setConfirmEmail }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function handleInput(event) {
    const confirmEmail = event.target.value;
    setConfirmEmail(confirmEmail)

    if (confirmEmail != email) {
      setAlertMessage("Emails must match!");
      setShowAlert(true);
    } else {
      setAlertMessage("");
      setShowAlert(false);
    }
  }

  return (
    <div className="field-container">
      <label htmlFor="confirm-email">* Confirm Email: </label>
      <input
        className="field-input"
        id="confirm-email"
        type="text"
        value={confirmEmail}
        placeholder="Confirm your email"
        onChange={handleInput}
      />
     { showAlert && <p className="alert-message">{alertMessage}</p>}
    </div>
  );
}

export default ConfirmEmail;
