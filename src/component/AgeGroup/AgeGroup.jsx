
import "./../AgeGroup/AgeGroup.scss";

function AgeGroup() {
   
    return (
        <div>
            <h3 className='AgeGroup__title'>Age Group *</h3>
            <div className="AgeGroup">
                <input type="radio" value="Less than 24 months"
                    name='AgeGroup__select'
                    className="AgeGroup__select"
                />
                <p>Less than 24 months</p>
            </div>

            <div className="AgeGroup">
                <input type="radio" value="2-12 years old"
                    name='AgeGroup__select'
                    className="AgeGroup__select"
                />
                <p>2-12 years old</p>
            </div>

            <div className="AgeGroup">
                <input type="radio" value="13 + years old"
                    name='AgeGroup__select'
                    className="AgeGroup__select"
                />
                <p>13 + years old</p>
            </div>


        </div>
    )
};
export default AgeGroup;