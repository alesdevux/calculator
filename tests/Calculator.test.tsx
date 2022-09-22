import { cleanup, fireEvent, render, screen } from '@testing-library/react'
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

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should input is readOnly', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')
    expect(input.getAttribute('readOnly')).not.toBe(null)
  })

  it('should input show value after user clicking a number', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const input: HTMLInputElement = screen.getByRole('textbox')

    fireEvent.click(one)
    expect(input.value).toBe('1')
  })

  it('should input show value after user clicking several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const three = screen.getByText('3')
    const input: HTMLInputElement = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(three)
    expect(input.value).toBe('123')
  })

  it('should input show value after user clicking a numbers and operator', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const plus = screen.getByText('+')
    const input: HTMLInputElement = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(plus)
    fireEvent.click(two)
    expect(input.value).toBe('12+2')
  })

  it('should return a result after clicking equal sign', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const plus = screen.getByText('+')
    const equal = screen.getByText('=')
    const input: HTMLInputElement = screen.getByRole('textbox')

    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(plus)
    fireEvent.click(two)
    fireEvent.click(equal)
    expect(input.value).toBe('14')
  })
})
