import { render, screen } from '@testing-library/react'

import HelloWorld from '.'

describe('ActionMenu', () => {
  it('should render the component', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
