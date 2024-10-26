// Select Wrapper for nodes 
// Takes options as array of strings

export const NodeSelectWrapper = ({label, value, options, handleChange}) => {
    return (
        <div>
            <label>
                {label}
                <select value={value} onChange={handleChange}>
                    { options.map(option => (
                    <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}
