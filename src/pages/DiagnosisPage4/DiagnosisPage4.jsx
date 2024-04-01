import "./../DiagnosisPage4/DiagnosisPage4.scss"
import arrowBack from './../../assets/icons/Back.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "axios";


function DiagnosisPage4 (){


    const [diagnosisData, setDiagnosisData] = useState([]);
    const baseUrl = "http://localhost:8084";

    useEffect(() => {
      // Fetch diagnosisData from the backend
      const getDiagnosisData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/diagnosis4`);
            setDiagnosisData(response.data);
            console.log("response.data: ",response.data);
        } catch (error) {
            console.log(error);
        }
      }
      getDiagnosisData()
    },[]);

    return (
        <div className="diagnosis">
            <div className="diagnosis__header">
                <Link to="/diagnosis3" >
                    <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
                </Link>
                <h3>Diagnosis Result</h3>
            </div>
            <ul className="diagnosis__ul">
                {diagnosisData.map((item)=>{
                    return (
                        <li className="diagnosis__li" key={item.IssueID}>
                            <div>IssueID: {item.IssueID}</div>
                            <div>Issue Name: {item.IssueName}</div>
                            <div>IssueIcdName: {item.IssueIcdName}</div>
                            <div>IssueProfName: {item.IssueProfName}</div>
                            <div>Issue Accuracy: {item.IssueAccuracy}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default DiagnosisPage4;