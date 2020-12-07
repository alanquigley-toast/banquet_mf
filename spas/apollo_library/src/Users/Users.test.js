import React from 'react'
import { render } from '@testing-library/react'
import { User } from './User'

describe('<User />', () => {
  it('should render', () => {
    const { container } = render(<User>Hello World</User>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<User testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
