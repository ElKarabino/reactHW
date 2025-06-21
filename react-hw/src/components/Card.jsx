import "./Card.scss";

export const Card = (props) => {
    return (
        <div className="card">
            <h3 className="card_title">– ROBO –</h3>
            <p className="card_price">{props.price}</p>
            <p className="card_school">{props.school}</p>
            <button className="card_button">Оставить заявку</button>
        </div>
    )
}