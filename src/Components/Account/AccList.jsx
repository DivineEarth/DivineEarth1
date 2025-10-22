import "./AccList.css";
import applelogo from "../../images/AccListimgs/apple.png";
import maillogo from "../../images/AccListimgs/mail.png";

function AccList({ open, onClose, onEmailClick, onGoogleClick, user, onSignOut }){

    if (!open) return null;

    if (user) {
      return (
        <div className="acc-container">
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h1>Welcome</h1>
          <p>{user.displayName || user.email}</p>
          <button className="social-btn google" onClick={onSignOut}>Sign Out</button>
          <button className="back-btn" onClick={onClose}>Go Back</button>
        </div>
      );
    }

    return(
        <div className="acc-container">
            <button className="close-btn" onClick={onClose}>&times;</button>

            <h1>Create your profile</h1>
            <p>
                By creating a profile on Adoptrees you will have easy access to your trees,
                monitor your impact and share it.
            </p>

            <div className="social-buttons">
                <button className="social-btn google" onClick={onGoogleClick}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                Continue with Google
                </button>
                <button className="social-btn facebook">
                <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook logo" />
                Continue with Facebook
                </button>
                <button className="social-btn apple">
                <img src= {applelogo} alt="Apple logo" />
                Continue with Apple
                </button>
                <button className="social-btn email" onClick={onEmailClick}>
                <img src={maillogo} alt="Email logo" />
                Continue with email
                </button>
            </div>

            <button className="back-btn" onClick={onClose}>Go Back</button>
        </div>

    );
}

export default AccList;