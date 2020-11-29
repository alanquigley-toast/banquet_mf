import React from 'react'
import { render } from '@testing-library/react'
import { Books } from './Books'

describe('<Books />', () => {
  it('should render', () => {
    const { container } = render(<Books>Hello World</Books>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(
      <Books testId='my-test-id' name='test' label='Test' />
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
