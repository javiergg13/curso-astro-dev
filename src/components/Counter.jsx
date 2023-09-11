import { useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="text-white mb-4">
      <button className="border px-4 py-1 text-xl" onClick={() => setCounter(counter + 1)}>+</button>
      <span className="m-2">{counter}</span>
      <button className="border px-4 py-1 text-xl" onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}