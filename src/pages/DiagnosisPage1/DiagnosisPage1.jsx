import "./../DiagnosisPage1/DiagnosisPage1.scss";
import Diagnosis from "./../../component/Diagnosis/Diagnosis";
import Footer from "../../component/Footer/Footer";
import arrowBack from './../../assets/icons/Back.png';
import { Link, useNavigate } from 'react-router-dom';

function DiagnosisPage1 (){

    const navigate = useNavigate();
    const handleClick = ()=>(
        navigate ("/diagnosis2")
    );

    return (
        <div className="DiagnosisPage1">
            <div className="DiagnosisPage1__header">
                <Link to="/" >
                    <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
                </ Link>
            </div>
            <Diagnosis />
            <div className="DiagnosisPage1__text">
                <h1 className="DiagnosisPage1__title">Self Diagnosis</h1>
                <p>Specify your symptoms to receive a
                    list of possible conditions which match your symptoms
                </p>
            </div>
            <button className="DiagnosisPage1__button" 
            onClick={handleClick}
            >Start diagnosis</button>
            <Footer />
        </div>
    )
}
export default DiagnosisPage1;