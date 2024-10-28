import { nodes } from "../constants/nodesList";

export const getNodeIcon = (nodeType) => {
  const icon = nodes.find((node) => node.type === nodeType)?.icon;
  return icon;
};

export const getPositionFromTop = (percentage) => {
  return `${Math.round(percentage * 100) / 100}%`;
};

export const extractVariableHandlers = (input) => {
  const regex = /{\{(.*?)}}/g;

  const inputHandlerList = [];
  let match;

  while ((match = regex.exec(input))) {
    inputHandlerList.push(match[1]);
  }
  return inputHandlerList;
};
