// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodes } from './utils/constants/nodesList';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {
                    // Cleaner and extensible way to render draggable nodes
                    nodes.map((node) => (
                    <DraggableNode key={node.type} type={node.type} label={node.label} />
                    ))
                }
            </div>
        </div>
    );
};
