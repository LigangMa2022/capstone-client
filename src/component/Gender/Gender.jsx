
import "./../Gender/Gender.scss";

function Gender() {
   
    return (
        <div>
            <h3 className='Gender__title'>Gender *</h3>
            <div className="Gender">
                <input type="radio" value="Male"
                    name='Gender__select'
                    className="Gender__select"
                />
                <p>Male</p>
            </div>

            <div className="Gender">
                <input type="radio" value="Female"
                    name='Gender__select'
                    className="Gender__select"
                />
                <p>Female</p>
            </div>

        </div>
    )
};
export default Gender;