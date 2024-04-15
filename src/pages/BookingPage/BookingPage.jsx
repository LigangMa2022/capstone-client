import "./../BookingPage/BookingPage.scss";
import arrowBack from './../../assets/icons/Back.png';
import doc1 from "./../../assets/icons/doc1a.png";
import { Link } from 'react-router-dom';
import TimeCards from "../../component/TimeCards/TimeCards";
import Footer from "./../../component/Footer/Footer";

function BookingPage (){
    return (
        <div>
            <div className="booking">
                <Link to="/" >
                    <img src={arrowBack} className="booking__arrowBack" alt="arrowBack" />
                </ Link>
                <h2>Clinic Booking</h2>
            </div>
            <div className="booking__Doc">
                <img src={doc1} alt="" />
                <div className="booking__Doc--text">
                    <h2 className="booking__Doc--detail">Dr. Markus Horiz</h2>
                    <h4 className="booking__Doc--spec">Psychiatrist</h4>
                    <p className="booking__Doc--detail1">★ 4.7</p>
                    <p className="booking__Doc--detail">⟟ 800m away</p>
                </div>
            </div>
            <div className="booking__about">
                <h3 className="booking__about--title">About</h3>
                <p className="booking__about--description">With over 15 years of experience in primary care,
                    Dr. Horizon has earned a reputation for excellence in
                    diagnosing and treating a wide... <span className="booking__readmore">Read more</span>
                </p>
            </div>
            <div className="booking__timecards">
                <TimeCards />
            </div>

            <div className="booking__timeoptions">
                <div className="booking__timeoption1">
                    <p>2:00 PM</p>
                </div>
                <div className="booking__timeoption2">
                    <p>2:20 PM</p>
                </div>
                <div className="booking__timeoption3">
                    <p>2:40 PM</p>
                </div>
                <div className="booking__timeoption2">
                    <p>3:00 PM</p>
                </div>
            </div>

            <div className="booking__buttongroup">
                <button className="booking__button">Next</button>
            </div>
            <Footer />


            
        </div>
    )
}
export default BookingPage;