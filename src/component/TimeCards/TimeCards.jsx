import "./../TimeCards/TimeCards.scss";

const TimeCards = () => {
    return (
        <div className="timeCard__container">
            <div className="timeCard">
                <p className="timeCard__day">Mon</p>
                <p className="timeCard__date">21</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Tue</p>
                <p className="timeCard__date">22</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Wen</p>
                <p className="timeCard__date">23</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Thu</p>
                <p className="timeCard__date">24</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Fri</p>
                <p className="timeCard__date">25</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Sat</p>
                <p className="timeCard__date">26</p>
            </div>
            <div className="timeCard__normal">
                <p className="timeCard__day">Sun</p>
                <p className="timeCard__date">27</p>
            </div>
        </div>
    )
}
export default TimeCards;
