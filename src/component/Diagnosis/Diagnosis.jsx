import smartDiagnosis from "./../../assets/icons/SmartDiagnosisLogo.png"
import smartDiagnosisContent from "./../../assets/icons/SmartDiagnosisLogoContent.png";
import "./../Diagnosis/Diagnosis.scss";

const Diagnosis = () => {
    return (
        <div className="diagnosis">
            <div className="diagnosis__hero">
                <img className="diagnosis__icon1" src={smartDiagnosis} alt="smart diagnosis"/>
            </div>
            <div className="diagnosis__hero">
                <img className="diagnosis__icon2" src={smartDiagnosisContent} alt="smartDiagnosisContent" />
            </div>
        </div>
    )
}
export default Diagnosis;