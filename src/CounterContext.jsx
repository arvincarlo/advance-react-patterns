import { createContext, useContext } from 'react';

const CounterContext = createContext();

function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={{"success": true}}>
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