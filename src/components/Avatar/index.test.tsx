import Artist from '.'
import { render, screen } from '~/setup-testing-library'

const props = {
  avatarUrl: '/fake-url',
  name: 'John Doe',
}

describe('Artist', () => {
  it('should render with default avatar', () => {
    render(<Artist name={props.name} />)

    const defaultAvatar = screen.getByAltText('Default avatar')

    expect(defaultAvatar).toBeInTheDocument()
  })

  it('should render with custom avatar', () => {
    render(<Artist {...props} />)

    const avatar = screen.getByAltText('Avatar')

    expect(avatar).toBeInTheDocument()
  })
})
