import './Footer.scss';
import homeIcon from "./../../assets/icons/HomeIcon2.png";
import diagnosisIcon from "./../../assets/icons/DiagnosisIcon.png";
import bookingIcon from "./../../assets/icons/AppointmentIcon.png";
import profileIcon from "./../../assets/icons/ProfileIcon.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" >
                <img src={homeIcon} className="footer__Icon" alt="home Icon" />
            </ Link>
            <Link to="/diagnosis1" >
                <img src={diagnosisIcon} className="footer__Icon" alt="diagnosis Icon" />
            </ Link>
            <Link to="/booking" >
                <img src={bookingIcon} className="footer__Icon" alt="booking Icon" />
            </ Link>
            <Link to="/profile" >
                <img src={profileIcon} className="footer__Icon" alt="profile Icon" />
            </ Link>
        </div>
    );
}

export default Footer;