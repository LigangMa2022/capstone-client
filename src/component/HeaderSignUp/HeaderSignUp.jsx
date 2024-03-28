import './HeaderSignUp.scss';
import arrowBack from './../../assets/icons/Back.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link to="/" >
                <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
            </ Link>
            <h1>Sign Up</h1>
        </div>
    );
}

export default Header;