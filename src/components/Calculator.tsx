import { useState } from 'react'
import { evaluate } from 'mathjs'
import './Calculator.css'

export const operators: string[] = ['+', '-', '*', '/']
export const rows: (number | string)[][] = [
  ['DEL', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

const Calculator = () => {
  type Value = string
  const [value, setValue] = useState<Value>('')

  const createHandlerCell = (cell: Value) => {
    const signEqual: boolean = cell === '='
    const cellIsOperator: boolean = operators.includes(cell)
    const lastOfValue: Value = value[value.length - 1]
    const lastOfValueIsOperator: boolean = operators.includes(lastOfValue)

    if (cell === 'DEL') {
      setValue(value.slice(0, -1))
      return
    }
    if (cellIsOperator && lastOfValueIsOperator) {
      setValue(value.slice(0, -1) + cell)
      return
    }
    signEqual ? setValue(evaluate(value)) : setValue(value + cell)
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <input readOnly value={value} />
        <div role='grid' className='buttons'>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} role='row'>
              {row.map(cell => (
                <button
                  onClick={() => createHandlerCell(cell.toString())}
                  key={cell}
                  role='cell'
                  className={cell === '=' ? 'equal' : ''}
                >
                  {cell}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Calculator
