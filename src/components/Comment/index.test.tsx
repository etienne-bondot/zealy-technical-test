import userEvents from '@testing-library/user-event'

import Comment from '.'
import { mockComment } from '~/__mocks__/comment'
import { render, screen } from '~/setup-testing-library'

describe('Comment', () => {
  it('should render replies when view replies is clicked', async () => {
    render(<Comment comment={mockComment} />)

    const repliesButton = screen.getByRole('button')

    await userEvents.click(repliesButton)

    expect(repliesButton).toHaveTextContent('Hide replies')
  })
})
