import { nodes } from "../constants/nodesList"

export const getNodeIcon = (nodeType) => {
    const icon = nodes.find(node => node.type === nodeType)?.icon;
    return icon;
}