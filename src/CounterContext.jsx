import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

const initialState = {
    count: 0,
    maxCount: 100,
    minCount: 0
}

function reducer(state, action) {
    switch(action.type) {
        case "increase": 
            return {
                ...state,
                count: state.count + 1
            }
        case "decrease":
            return {
                ...state,
                count: state.count - 1
            }
        default: {
            return state
        }
    }
}

function CounterProvider({children}) {
    const [{count, maxCount}, dispatch] = useReducer(reducer, initialState);

    function increase() {
        // Increment the count
        console.log("increasing count");
        dispatch({type: "increase"})
    }

    function decrease() {
        // Decrement the count
        console.log("decreasing count");
        dispatch({type: "decrease"})
    }

    return (
        <CounterContext.Provider value={{
            count,
            maxCount,
            increase,
            decrease
        }}>
            {children}
        </CounterContext.Provider>
    )
}

function useCounter() {
    const context = useContext(CounterContext);

    if (context === undefined) {
        throw new Error("Counter Context was used outside of its provider")
    }

    return context;
}

export {CounterProvider, useCounter}