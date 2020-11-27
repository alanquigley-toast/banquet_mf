import React from 'react'
import { render } from '@testing-library/react'
import { Demo } from './Demo'

describe('<Demo />', () => {
  it('should render', () => {
    const { container } = render(<Demo>Hello World</Demo>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<Demo testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
