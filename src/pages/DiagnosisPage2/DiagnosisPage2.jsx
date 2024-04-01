import "./../DiagnosisPage2/DiagnosisPage2.scss";
import arrowBack from './../../assets/icons/Back.png';
import { Link, useNavigate } from 'react-router-dom';
import AgeGroup from "../../component/AgeGroup/AgeGroup";
import Gender from "../../component/Gender/Gender";
import axios from "axios";

function DiagnosisPage2 (){

    const navigate = useNavigate();
    const baseUrl = "http://localhost:8084";

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        return (
            axios.post (
                `${baseUrl}/diagnosis2`,
                {
                    AgeGroup: e.target.AgeGroup__select.value,
                    Height: e.target.height.value,
                    Weight: e.target.weight.value,
                    Gender: e.target.Gender__select.value
                }
            ).then(()=>{
                navigate("/diagnosis3");
            }).catch((error) => {
                console.log(error);
            })
        );
    };

    return (
        <div className="DiagnosisPage2">
            <div className="DiagnosisPage2__header">
                <Link to="/diagnosis1" >
                    <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
                </Link>
                <h3>User Information</h3>
            </div>
            
            <form className="DiagnosisPage2__form" name="form" onSubmit={handleFormSubmit}>
                <AgeGroup />
                <section className="DiagnosisPage2__form--text">
                    <h3>Height (cm) *</h3>
                    <input type="text" name="height" className="DiagnosisPage2__form--input"
                    placeholder="165"/>
                    
                    <h3>Weight (lbs) *</h3>
                    <input type="text" name="weight" className="DiagnosisPage2__form--input"
                    placeholder="180"/>
                </section>
                <Gender />
                <button className="DiagnosisPage2__button" type="submit">Next</button>
            </form>
            
        </div>
    )
}
export default DiagnosisPage2;