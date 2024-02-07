import type { PropsWithChildren, ReactElement } from 'react'

import './styles.scss'

const CommentsBlock = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="comments-block-component">{children}</div>
}

export default CommentsBlock
