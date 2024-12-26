import { useCounter } from "./CounterContext"

function App() {
  // Call the custom hook to use the counter
  const counter = useCounter();
  
  return (
      <div>
        <h1>My simple counter using Context</h1>
        <div>
          Current Count: XXX
        </div>
      </div>
  )
}

export default App
