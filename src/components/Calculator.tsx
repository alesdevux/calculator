export const rows: (number | string)[][] = [
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '=', '+']
]

const Calculator = () => {
  return (
    <div>
      <h1>Calculator</h1>
      <input />
      <div role='grid'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} role='row'>
            {row.map(cell => (
              <button key={cell} role='cell'>
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
