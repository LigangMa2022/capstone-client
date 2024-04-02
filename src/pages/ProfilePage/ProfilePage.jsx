import "./../ProfilePage/ProfilePage.scss";
import arrowBack from './../../assets/icons/Back.png';
import notification from "./../../assets/icons/NotificationIcon.png";
import maskgroup from "./../../assets/icons/MaskGroup.png";
import personalinfo from "./../../assets/icons/PersonalInfoIcon.png";
import arrowright from "./../../assets/icons/Arrow - Right 2.png";
import reportIcon from "./../../assets/icons/reportIcon.png";
import appointment from "./../../assets/icons/AppointmentIcon2.png";
import health from "./../../assets/icons/HealthIcon.png";
import medical from "./../../assets/icons/MedicationIcon.png";
import logout from "./../../assets/icons/LogoutIcon.png";
import Footer from "../../component/Footer/Footer";
import { Link } from 'react-router-dom';

function ProfilePage (){
    return (
        <div>
            <div className="profile">
                <Link to="/" >
                    <img src={arrowBack} className="profile__arrowBack" alt="arrowBack" />
                </ Link>
                <img src={notification} alt="notification icon" />
            </div>

            <div className="profile__maskgroup">
                <div>
                    <img className="profile__photo" src={maskgroup} alt="personal photo" />
                </div>
                <h2 className="profile__name">Alexa Smith</h2>
            </div>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={personalinfo} alt="" />
                <p className="profile__text">Personal Information</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>
            <hr className="profile__hr"/>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={reportIcon} alt="" />
                <p>Report</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>
            <hr className="profile__hr"/>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={appointment} alt="" />
                <p>Appoint History</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>
            <hr className="profile__hr"/>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={health} alt="" />
                <p>Health History</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>
            <hr className="profile__hr"/>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={medical} alt="" />
                <p>Medical Cabinet</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>
            <hr className="profile__hr"/>

            <div className="profile__personalinfo">
                <img className="profile__personalicon" src={logout} alt="" />
                <p className="profile__logout">Logout</p>
                <img className="profile__arrowright" src={arrowright} alt="arrow right" />
            </div>

            
        <Footer />
        </div>
    )
}
export default ProfilePage;