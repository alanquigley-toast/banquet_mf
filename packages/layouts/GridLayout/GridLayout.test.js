import React from 'react'
import { render } from '@testing-library/react'
import { GridLayout } from './GridLayout'

describe('<GridLayout />', () => {
  it('should render', () => {
    const { container } = render(<GridLayout>Hello World</GridLayout>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<GridLayout testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
