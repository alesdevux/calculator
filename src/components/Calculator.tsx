import { useState } from 'react'
import { evaluate } from 'mathjs'

export const rows: (number | string)[][] = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '=', '+']
]

const Calculator = () => {
  type Value = string
  const [value, setValue] = useState<Value>('')

  const createHandlerCell = (cell: Value) => {
    const signEqual = cell === '='
    signEqual ? setValue(evaluate(value)) : setValue(value + cell)
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input readOnly value={value} />
      <div role='grid'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} role='row'>
            {row.map(cell => (
              <button
                onClick={() => createHandlerCell(cell.toString())}
                key={cell}
                role='cell'
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Calculator
