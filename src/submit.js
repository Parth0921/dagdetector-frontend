// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
    
    const { nodes, edges } = useStore();
    const handleClick = async (e) => {
        e.preventDefault();
        const nodesList = nodes.map((node) => node.id);
        const edgesList = edges.map((edge) => {
            return {
                source: edge.source,
                target: edge.target
            }
        })

        const payload = {
            nodes: nodesList,
            edges: edgesList
        }
        
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), 
            })
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={handleClick}>Submit</button>
        </div>
    );
}
