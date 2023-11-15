import { useState } from "react";
import "./App.css";

import Name from "./Name";
import Email from "./Email";
import ConfirmEmail from "./ConfirmEmail";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  function handleSubmit(event) {
    if (!username || !email) {
      event.preventDefault();
    }
  }

  return (
    <form
      className="register"
      action="/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <h1 className="form-title">Basic Form</h1>
      <p>
        <em className="asterisk">*</em> Indicates a required field
      </p>
      <Name username={username} setUsername={setUsername} />
      <Email email={email} setEmail={setEmail} />
      <ConfirmEmail
        confirmEmail={confirmEmail}
        email={email}
        setConfirmEmail={setConfirmEmail}
      />

      <div className="button-container">
        <button className="submit-button" type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
