const counterReducer=(state=1,action) =>
{
    switch (action.type){
        case 'INCREEMENT':
            return state+1
        case 'DECREEMENT':
                    return state-1

    
        default:
            return state
                }
}

export default counterReducer