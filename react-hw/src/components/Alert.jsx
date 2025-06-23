import "./Alert.scss"
import { CloseIcon } from "./icons/close_icon"

export const Alert = ({type ,icon}) => {
    return (
        <div className={`alert_wrapper alert_${type}`}>
            <span className="alert_icon">{icon}</span>
            <span className="alert_text">Loren Ipsum</span>
            <CloseIcon/>
        </div>
    )
}