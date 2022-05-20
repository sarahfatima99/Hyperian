const addQues = (state={},action) =>
{
    
switch (action.type){
    case "addQues":
        return {
            ...state,
            payload:action.payload
        }

        default: return state
    }


}

export default addQues 