import React from 'react'
import { render } from '@testing-library/react'
import { Parcel } from './Parcel'

describe('<Parcel />', () => {
  it('should render', () => {
    const { container } = render(<Parcel>Hello World</Parcel>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<Parcel testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
