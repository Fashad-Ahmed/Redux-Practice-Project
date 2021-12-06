import { mulNum, divNum } from "../action/action";


const initialState = 90078601

const changeVal = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY":
            return initialState * 3.142;
            break;
        
        case "DIVIDE":
            return initialState / 3.142;
            break; 
        default:
            return initialState;
            break;
    }
}

export default changeVal;