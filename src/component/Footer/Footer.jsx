import './Footer.scss';
import homeIcon from "./../../assets/icons/HomeIcon2.png";
import diagnosisIcon from "./../../assets/icons/DiagnosisIcon.png";
import bookingIcon from "./../../assets/icons/AppointmentIcon.png";
import profileIcon from "./../../assets/icons/ProfileIcon.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="footer__link" >
                <img src={homeIcon} className="footer__Icon" alt="home Icon" />
                <p className='footer__text'>Home</p>
            </ Link>
            <Link to="/diagnosis1" className="footer__link" >
                <img src={diagnosisIcon} className="footer__Icon" alt="diagnosis Icon" />
                <p className='footer__text'>Diagnosis</p>
            </ Link>
            <Link to="/booking" className="footer__link" >
                <img src={bookingIcon} className="footer__Icon" alt="booking Icon" />
                <p className='footer__text'>Booking</p>
            </ Link>
            <Link to="/profile" className="footer__link" >
                <img src={profileIcon} className="footer__Icon" alt="profile Icon" />
                <p className='footer__text'>Profile</p>
            </ Link>
        </div>
    );
}

export default Footer;