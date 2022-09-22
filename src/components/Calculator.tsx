export const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const Calculator = () => {
  return (
    <div>
      <h1>Calculator</h1>
      <div>
        {numbers.map(number => (
          <button key={number}>{number}</button>
        ))}
      </div>
    </div>
  )
}
export default Calculator
