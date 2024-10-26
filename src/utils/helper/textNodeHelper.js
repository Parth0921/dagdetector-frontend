export const extractInputHandler = (input) => {
    const regex = /{{(.*?)}}/g;

    const inputHandlerList = [];
    let match;
    
    while(match = regex.exec(input)) {
        console.log(match);
        inputHandlerList.push(match[1]); 
    }
    return inputHandlerList;
}
