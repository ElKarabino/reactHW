import { useState } from "react";
import "./Input.scss";

export const Input = ({ isDisabled = false, isError = false }) => {
    const [text, writeText] = useState("")
    return (
        <div className="input_wrapper">
            <label htmlFor="text" className="input_label"> Title </label>
            <input 
                className={`input ${isError ? "input_error" : ""}`}
                type="text"
                id="text"
                placeholder="Placeholder"
                disabled={isDisabled}
                value={text}
                onChange={(e) => writeText(e.target.value)}
            />
            {isError && <span className="input_error_text">Error text</span>}
        </div>
    )
}