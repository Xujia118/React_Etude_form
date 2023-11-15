function ConfirmEmail( {confirmEmail, setConfirmEmail} ) {
    return (
        <div className="field-container">
            <label htmlFor="confirm-email">* Confirm Email: </label>
            <input 
            className="confirm-email"
            id="confirm-email"
            type="text"
            value={confirmEmail}
            placeholder="Confirm your email"
             />
             <p className="alert-message">Emails must match!</p>
        </div>
    )
}

export default ConfirmEmail;