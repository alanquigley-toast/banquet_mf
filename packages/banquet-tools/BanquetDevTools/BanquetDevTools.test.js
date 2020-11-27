import React from 'react'
import { render } from '@testing-library/react'
import { BanquetDevTools } from './BanquetDevTools'

describe('<BanquetDevTools />', () => {
  it('should render', () => {
    const { container } = render(<BanquetDevTools>Hello World</BanquetDevTools>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<BanquetDevTools testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
