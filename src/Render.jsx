import { useCounter } from "./CounterContext"

function Render() {
    const {count, maxCount} = useCounter();

    return (
        <div>
            Render's Count: {count}
            Max Count: {maxCount}
        </div>
    )
}

export default Render
