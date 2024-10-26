import { nodes } from "../constants/nodesList";

export const buildNodeTypes = () => {
    const nodeTypes = {};
    nodes.forEach((node) => {
        nodeTypes[node.type] = node.nodeElement;
    })
    return nodeTypes;
}
