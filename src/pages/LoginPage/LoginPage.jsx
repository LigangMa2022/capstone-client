import "./../LoginPage/LoginPage.scss"
import HeaderLogin from "./../../component/HeaderLogin/HeaderLogin";
import Diagnosis from "./../../component/Diagnosis/Diagnosis";
import emailIcon from "./../../assets/icons/Email.png";
import passwordIcon from "./../../assets/icons/Password.jpg";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function LoginPage (){
    const baseUrl = "http://localhost:8084";
    const loginUrl = `${baseUrl}/login`;
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleFormSubmit (event){
        event.preventDefault();
        axios.post(
            loginUrl,
            {
                email: event.target.email.value,
                password: event.target.password.value
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                navigate('/');
            })
            .catch((error) => {
                setError(error.response.data);
            });
    };

    return (
        <div className="login">
            <HeaderLogin />
            <Diagnosis />

            <form onSubmit={handleFormSubmit} className="login__form">
                <div className="login__email">
                    <img className="login__emailIcon" src={emailIcon} alt="Email Icon" />
                    <input type="text" name="email" className="login__emailInput" 
                    placeholder="example123@gmail.com" />
                </div>

                <div className="login__password">
                    <img className="login__passwordIcon" src={passwordIcon} alt="Password Icon" />
                    <input type="text" name="password" className="login__passwordInput"
                    placeholder="Enter your password" />
                </div>

                <button type="submit" className="login__button">Log in</button>
                {error && <div className="login__message">{error}</div>}
            </form>

            <p>
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    )
};
export default LoginPage;