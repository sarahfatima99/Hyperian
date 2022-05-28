const addPayload = (state={},action) =>
{
    
switch (action.type){
    case "addPayload":
        return {
            ...state,
            payload:action.payload
        }

        default: return state
    }


}

export default addPayload 