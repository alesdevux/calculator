import { useState } from 'react'
import { evaluate } from 'mathjs'
import './Calculator.css'

export const operators: string[] = ['+', '-', '*', '/']
export const rows: (number | string)[][] = [
  ['', 'CE', 'DEL', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

const Calculator = () => {
  type Value = string
  const [value, setValue] = useState<Value>('')
  const [error, setError] = useState<string>('')

  const createHandlerCell = (cell: Value) => {
    setError('')
    const signEqual: boolean = cell === '='
    const cellIsOperator: boolean = operators.includes(cell)
    const lastOfValue: Value = value[value.length - 1]
    const lastOfValueIsOperator: boolean = operators.includes(lastOfValue)

    if (signEqual && value === '') {
      setError('Error: Introduce an operation before clicking equal sign')
      return
    }
    if (cell === 'DEL') {
      setValue(value.slice(0, -1))
      return
    }
    if (cell === 'CE') {
      setValue('')
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
      <p className='error-message' role='error'>
        {error}
      </p>
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
