import React from 'react'
import { render } from '@testing-library/react'
import { AddUserForm } from './AddUserForm'

describe('<AddUserForm />', () => {
  it('should render', () => {
    const { container } = render(<AddUserForm>Hello World</AddUserForm>)
    expect(container.firstChild).toBeTruthy()
  })

  it.skip('should have a test-id', () => {
    const { container } = render(<AddUserForm testId='my-test-id' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'my-test-id')
  })

  it.todo('should be accessible')
  it.todo('should have prop-type checking')
})
