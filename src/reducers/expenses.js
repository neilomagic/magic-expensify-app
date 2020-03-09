

const expensesReducerDefeaultState = [];

export default (state = expensesReducerDefeaultState, action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,       // note the spread operator
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id  // note the destructuring the object in the filter
                          );
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };   
                }
                else{
                    return expense;
                }
            });
        default:
            return state;
    }

};

 