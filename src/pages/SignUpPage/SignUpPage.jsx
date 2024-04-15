import "./../SignUpPage/SignUpPage.scss"
import HeaderSignUp from "../../component/HeaderSignUp/HeaderSignUp";
import Diagnosis from "./../../component/Diagnosis/Diagnosis";
import emailIcon from "./../../assets/icons/Email.png";
import passwordIcon from "./../../assets/icons/Password.jpg";
import userIcon from "./../../assets/icons/User-Outline.png";
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUpPage (){
    const baseUrl = "http://localhost:8084";
    const signupUrl = `${baseUrl}/signup`;
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    function handleFormSubmit (event){
        event.preventDefault();
        axios.post(
            signupUrl,
            {
                name: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
            })
            .then(() => {
                setSuccess(true);
                setError("");
                event.target.reset();
                // navigate("/login");
            })
            .catch((error) => {
                setSuccess(false);
                setError(error.response.data);
            });
    }

    return (
        <div className="signup">
            <HeaderSignUp />
            <Diagnosis />

            <form onSubmit={handleFormSubmit} className="signup__form">
                <div className="signup__user">
                    <img className="signup__userIcon" src={userIcon} alt="user Icon" />
                    <input type="text" name="username" className="signup__usernameInput" 
                    placeholder="Alexa Smith" />
                </div>

                <div className="signup__email">
                    <img className="signup__emailIcon" src={emailIcon} alt="Email Icon" />
                    <input type="text" name="email" className="signup__emailInput" 
                    placeholder="example123@gmail.com" />
                </div>

                <div className="signup__password">
                    <img className="signup__passwordIcon" src={passwordIcon} alt="Password Icon" />
                    <input type="text" name="password" className="signup__passwordInput"
                    placeholder="Enter your password" />
                </div>

                <button type="submit" className="signup__button">Sign Up</button>
                {success && <div className="signup__message">
                    Successfully signed up! Thank you for using our app!
                    Please login now</div>}
                {error && <div className="signup__message">{error}</div>}
            </form>

            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    )
};
export default SignUpPage;