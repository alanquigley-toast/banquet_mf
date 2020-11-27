import React from 'react'
import { render } from '@testing-library/react'
import { ParcelLoader } from './ParcelLoader'

describe('<ParcelLoader />', () => {
  it('should render', () => {
    const { container } = render(<ParcelLoader>Hello World</ParcelLoader>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<ParcelLoader testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
