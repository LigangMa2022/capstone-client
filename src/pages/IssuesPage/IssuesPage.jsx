import "./../IssuesPage/IssuesPage.scss"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import arrowBack from './../../assets/icons/Back.png';

function IssuesPage (){
    const [selectedIssue, setSelectedIssue] = useState({});
    const params = useParams();
    const defaultissueID = 431;
    const baseUrl = "http://localhost:8084";

    // get one Issue based on issueID from diagnosis data
    // not all issues can get detailed info due to data availability of our database
    useEffect(() => {
        try {
            const getSelectedIssue = async (id) => {
                const response = await axios.get(`${baseUrl}/issues/${id}`);
                setSelectedIssue(response.data[0]);
                };
            
                if (params.issueID) {
                getSelectedIssue(params.issueID);
                console.log("selectedIssue",selectedIssue);
                } else {
                getSelectedIssue(defaultissueID);
                }
        } catch (error) {
            console.log(error)
        }
    }, [params]);

    return (
        <div className="issue">
            <div className="header">
                <Link to="/diagnosis3" >
                    <img src={arrowBack} className="header__arrowBack" alt="arrowBack" />
                </ Link>
                <h1>Issue Details</h1>
            </div>
            <div className="issue__text">
                <h3>Selected Issue:</h3>
                <h4>Issue ID: {selectedIssue.ID}</h4>
                <h4>Issue Name: {selectedIssue.Name}</h4>
                <h4>Professional Name: {selectedIssue.ProfName}</h4>
                <h4>Description:</h4>
                <p>{selectedIssue.Description}</p>
                <h4>Medical Condition:</h4>
                <p>{selectedIssue.MedicalCondition}</p>
                <h4>Possible Symptoms:</h4>
                <p>{selectedIssue.PossibleSymptoms}</p>
                <h4>Treatment Description:</h4>
                <p>{selectedIssue.TreatmentDescription}</p>
            </div>
        </div>
    )
}
export default IssuesPage;