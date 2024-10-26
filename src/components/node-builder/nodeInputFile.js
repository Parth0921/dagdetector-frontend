// Reusable component for file input


export const NodeInputFile = ({ handleChange }) => {
    return (
        <div>
            <input type="file" onChange={handleChange} />
        </div>
    )
}
