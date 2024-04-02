import "./../HomePage/HomePage.scss";
import maskgroup from "./../../assets/icons/MaskGroup.png";
import NotificationIcon from "./../../assets/icons/NotificationIcon.png";
import doctorIcon from "./../../assets/icons/Doctor.png";
import Footer from "../../component/Footer/Footer";
import clinic from "./../../assets/icons/clinic.png";
import hospitalIcon from "./../../assets/icons/hospital.png";
import medicineIcon from "./../../assets/icons/Medicine.png";
import pharmacyIcon from "./../../assets/icons/Pharmacy.png";
import searchIcon from "./../../assets/icons/Search.png";
import doc1 from "./../../assets/icons/Avatar1.png";
import doc2 from "./../../assets/icons/Avatar2.png";
import doc3 from "./../../assets/icons/Avatar3.png";

function HomePage (){
    return (
        <div>
            <div className="home">
                <div className="home__header">
                    <div className="home__maskgroup">
                        <img className="home__mask" src={maskgroup} alt="mask group" />
                        <div className="home__greeting">
                            <h4 className="home__morning">Good morning </h4>
                            <h3>Alexa Smith</h3>
                        </div>
                    </div>
                    <div className="home__Notification">
                        <img src={NotificationIcon} alt="" />
                    </div>
                </div>
                <div className="home__searchsection">
                    <img className="home__searchIcon" src={searchIcon} alt="search icon" />
                    <input className="home__search" type="text" name="search"
                    placeholder="Search drugs or your symptoms"/>
                </div>
                <section className="home__categorysection">
                    <h2 className="home__category--title">Categories</h2>
                    <div className="home__category">
                        <div className="home__doctor">
                            <img src={doctorIcon} alt="" />
                            <p className="home__cat">doctors</p>
                        </div>
                        <div>
                            <img src={clinic} alt="" />
                            <p className="home__cat">clinics</p>
                        </div>
                        <div>
                            <img src={hospitalIcon} alt="" />
                            <p>hospitals</p>
                        </div>
                        <div>
                            <img src={medicineIcon} alt="" />
                            <p>medicine</p>
                        </div>
                        <div>
                            <img src={pharmacyIcon} alt="" />
                            <p>pharmacy</p>
                        </div> 
                    </div>
                </section>
                <section className="home__appointments">
                    <h1 className="home__appointments--title">Upcoming Appointments</h1>
                    <h2 className="home__appointments--content">No upcoming appointments</h2>
                </section>
                <h2 className="home__nearbyDocs--title">Nearby doctors</h2>
                <div className="home__nearbyDocs">
                    <div className="home__nearbyDoc">
                        <img className="home__docphoto" src={doc1} alt="" />
                        <p>Dr.Markus Horiz</p>
                        <p>★ 4.7 ⟟ 800m</p>
                    </div>
                    <div className="home__nearbyDoc">
                        <img className="home__docphoto" src={doc2} alt="" />
                        <p>Dr.Maria Elena</p>
                        <p>★ 4.8 ⟟ 500m</p>
                    </div>
                    <div className="home__nearbyDoc">
                        <img className="home__docphoto" src={doc3} alt="" />
                        <p>Dr.Stevi Jessi</p>
                        <p>★ 4.2 ⟟ 300m</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;