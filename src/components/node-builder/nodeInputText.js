// Input wrapper for nodes

export const NodeInputText = ({ label, value, handleChange }) => {
    return (
        <div>
            <label>
                {label}
                <input 
                    type="text"
                    value={value} 
                    onChange={handleChange} 
                />
            </label>
        </div>
    )
}

