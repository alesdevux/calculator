import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../src/App'
import Calculator from '../src/components/Calculator'

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operators: string[] = ['+', '-', '*', '/']

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render in App component', () => {
    render(<App />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => screen.getByText(number))
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operators', () => {
    render(<Calculator />)
    operators.forEach(operator => screen.getByText(operator))
  })
})
