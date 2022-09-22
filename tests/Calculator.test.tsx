import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

import Calculator from '../src/components/Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })
})
