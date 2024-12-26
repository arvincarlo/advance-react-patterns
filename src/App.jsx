import { useCounter } from "./CounterContext"

function App() {
  // Call the custom hook to use the counter
  const {count, increase, decrease} = useCounter();

  return (
      <div>
        <h1>My simple counter using Context</h1>
        <div>
          Current Count: {count}
        </div>
        <div>
          <button onClick={increase}>
            Increase
          </button>
          <button onClick={decrease}>
            Decrease
          </button>
        </div>
      </div>
  )
}

export default App
