import TextareaAutosize from "react-textarea-autosize"

export const NodeInputTextArea = ({ label, value, handleChange }) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <label>
                {label}
            </label>
            <TextareaAutosize 
                minRows={5}
                maxRows={13}
                value={value}
                onChange={handleChange}
                style={{ resize: 'none', width: "90%", alignSelf: "center", marginBottom: "15px" }}
            />
        </div>
    )
}
