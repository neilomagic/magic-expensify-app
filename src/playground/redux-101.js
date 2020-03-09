import { createStore } from 'redux';

// action generators... functions generate these

// create a single action generator

// const incrementCount = (payload = {}) =>({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1 
// });
    
//// destructure 1
// const incrementCount = ({incrementBy} = {}) =>({
//     type: 'INCREMENT',
//     incrementBy: typeof incrementBy === 'number' ? incrementBy : 1 
// });


// // destructure 2
// const incrementCount = ({incrementBy = 1} = {}) =>({
//     type: 'INCREMENT',
//     incrementBy: incrementBy  
// });


//  object destructure 3
const incrementCount = ({incrementBy = 1} = {}) =>({ // this part means, set the object variable to 1 or set up an empty one 
    type: 'INCREMENT',
    incrementBy  
});


const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({reset = 0 } = {} )=>({
    type: 'RESET',
    reset
});


const setCount = ({count = 0} = {})=>({
    type:'SET',
    count
});

// reducers
// reducers are pure functions -> output determined only by input, changing a variable outside the func scope
// never change state or action


const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':            
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: action.reset
            }
        case 'SET':
            return{
                count:action.count
            };
        default:
            return state;
    }
});

const store = createStore(countReducer);

// watch the store changes
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


// Action is nothing more that an objects that gets sent to the store

// increment

store.dispatch(incrementCount({incrementBy: 5}));

// reset to Zero
store.dispatch(resetCount());
// decrement

store.dispatch(decrementCount({decrementBy: 23}));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount());
store.dispatch(setCount({count:101}));

//console.log(store.getState());

