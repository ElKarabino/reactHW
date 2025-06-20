import "./Button.scss";

export const Button = (props) => {
    return (
        <button className="redButton">
            {props.buttonText}
        </button>
    )
}
