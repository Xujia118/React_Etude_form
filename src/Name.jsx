import { useState } from "react";

function Name({ username, setUsername }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleNameInput = (event) => {
    const name = event.target.value;
    setUsername(name);
    setShowAlert(!name);
  };

  return (
    <div className="field-container">
      <label htmlFor="name">* Name: </label>
      <input
        className="field-input"
        type="text"
        id="name"
        value={username}
        placeholder="Enter your name"
        onChange={handleNameInput}
        />
      {showAlert && <p className="alert-message">Name is required!</p>}
    </div>
  );
}

export default Name;
