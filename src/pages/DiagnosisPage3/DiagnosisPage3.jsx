import "./../DiagnosisPage3/DiagnosisPage3.scss";
import arrowBack from './../../assets/icons/Back.png';
import searchIcon from "./../../assets/icons/Search.png";
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import { useState } from "react";

function DiagnosisPage3 (){

    const navigate = useNavigate();
    const baseUrl = "http://localhost:8084";
    const [inputSymptoms, setInputSymptoms] = useState("");
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const handleInputChange = (e) => {
        setInputSymptoms(e.target.value);
    };

    const handleSelectChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setSelectedSymptoms((prevSelected) => [...prevSelected, value]);
        } else {
          setSelectedSymptoms((prevSelected) => prevSelected.filter((symptom) => symptom !== value));
        }
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("selectedSymptoms: ",selectedSymptoms);
        console.log("inputSymptoms: ",inputSymptoms);
        return (
            axios.post (
                `${baseUrl}/diagnosis3`,
                {
                    selectedSymptoms,
                    inputSymptoms
                }
            ).then(()=>{
                navigate("/diagnosis4")
            })
        )
    };

    const totalSymptoms = inputSymptoms.split(',').filter(Boolean).length + selectedSymptoms.length;
    const strength = Math.min(totalSymptoms / 5 * 100, 100);

    return (
        <div className="symptom">
            <div className="symptom__header">
                <Link to="/diagnosis2" >
                    <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
                </Link>
                <h3>Specify Symptoms</h3>
            </div>

            <div className="symptom__searchsection">
                    <img className="symptom__searchIcon" src={searchIcon} alt="search icon" />
                    <input className="symptom__search" type="text" name="search"
                    placeholder="Please enter your symptoms, separated by comma"
                    onChange={handleInputChange}/>
            </div>

            <form className="symptom__form" name="form" 
                onChange={handleSelectChange}
                onSubmit={handleFormSubmit}>
                    <div className="symptom__all">
                        <div className="symptom__container">
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom1" value="headache"/>
                                <label>Headache</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom2" value="Sorethroat"/>
                                <label>Sore throat</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom3" value="Stuffy nose"/>
                                <label>Stuffy nose</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom4" value="Runny nose"/>
                                <label>Runny nose</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom5" value="Cough"/>
                                <label>Cough</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom6" value="Fever"/>
                                <label>Fever</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom7" value="Vomiting"/>
                                <label>Vomiting</label>
                            </div>
                        </div>

                        <div className="symptom__container">
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom8" value="Chest Pain"/>
                                <label>Chest Pain</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom9" value="Eye Redness"/>
                                <label>Eye Redness</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom10" value="Itching eyes"/>
                                <label>Itching eyes</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom11" value="Sneezing"/>
                                <label>Sneezing</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom12" value="Back Pain"/>
                                <label>Back Pain</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom13" value="Skin rash"/>
                                <label>Skin rash</label>
                            </div>
                            <div>
                                <input type="checkbox" className="symptom__Check" id="symptom14" value="Stomach burning"/>
                                <label>Stomach burning</label>
                            </div>
                        </div>
                    </div>


                    <section className="symptom__yours">
                        <h3 className="symptom__title">Your symptoms : </h3>
                        <ul className="symptom__ul">
                            <li>{inputSymptoms}</li>
                            {selectedSymptoms.map((symptom) => (
                                <li className="symptom__li">{symptom},  </li>
                            ))}
                        </ul>
                    </section>

                    <h3 className="symptom__strengthTitle">Result strength</h3>
                    <div className="symptom__strengthBar">
                        <div className="symptom__strength" style={{ width: `${strength}%` }}></div>
                    </div>

                <button className="symptom__button" type="submit">Report symptoms</button>
            </form>


        </div>
    )
}
export default DiagnosisPage3;