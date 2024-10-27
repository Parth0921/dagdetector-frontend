// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodes } from './utils/constants/nodesList';

export const PipelineToolbar = () => {

    return (
        <div className='p-[10px]'>
            <div className='mt-6 flex flex-wrap gap-2'>
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
