// reusable node wrapper component
// Including name of the node as it would be common to every type of node created
// Children pattern allows us to put any type of content inside the node keeping the styles consistent

export const NodeWrapper = ({nodeName, children}) => {
    return (
        <div style={{width: 200, height: 80, border: '1px solid black'}}>
            <div>
                <span>{nodeName}</span>
            </div>
            {children}
        </div>
    )
}
