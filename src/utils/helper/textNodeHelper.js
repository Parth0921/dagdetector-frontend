export const extractInputHandler = (input) => {
    const regex = /{\{(.*?)}}/g;

    const inputHandlerList = [];
    let match;
    
    while(match = regex.exec(input)) {
        inputHandlerList.push(match[1]); 
    }
    return inputHandlerList;
}
