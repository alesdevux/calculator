import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

import Calculator, { numbers } from '../src/components/Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => screen.getByText(number))
  })
})
