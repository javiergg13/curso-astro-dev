import { useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="text-white mb-4">
      <button className="border px-4 py-1 text-xl flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100" onClick={() => setCounter(counter + 1)}>+</button>
      <span className="m-2">{counter}</span>
      <button className="border px-4 py-1 text-xl flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55  hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100" onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}