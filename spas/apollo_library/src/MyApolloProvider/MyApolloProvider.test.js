import React from 'react'
import { render } from '@testing-library/react'
import { MyApollo } from './MyApollo'

describe('<MyApollo />', () => {
  it('should render', () => {
    const { container } = render(<MyApollo>Hello World</MyApollo>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(
      <MyApollo testId='my-test-id' name='test' label='Test' />
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
