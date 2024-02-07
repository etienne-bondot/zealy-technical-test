import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

import type { ReactElement } from 'react'
import type { IComment } from '~/types/comment'

import Avatar from '~/components/Avatar'
import { getRelativeDate } from '~/utils/date'

import './styles.scss'

interface Props {
  className?: string
  comment: IComment
}

const Comment = ({ className, comment }: Props): ReactElement => {
  /** Local state */

  const commentRef = useRef<HTMLDivElement>(null)

  const [commentElement, setCommentElement] = useState<HTMLDivElement>()

  const [isCommentClamped, setIsCommentClamped] = useState<boolean>()

  const commentElementHeight = commentElement?.getBoundingClientRect().height || 0

  const commentElementLineHeight = 21

  const commentClasses = classNames('comment-component', className)

  const commentValueClasses = classNames('comment-value', {
    'comment-value--clamped': isCommentClamped,
    'comment-value--unclamped': !isCommentClamped,
  })

  /** Handlers  */

  const handleMoreClick = () => setIsCommentClamped(false)

  /** Effects */

  useEffect(() => {
    if (commentRef.current) setCommentElement(commentRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentRef.current])

  useEffect(() => {
    const linesCount = Math.round(commentElementHeight / commentElementLineHeight)

    if (linesCount > 4) {
      setIsCommentClamped(true)
    } else if ((linesCount === 4 && commentElement?.clientHeight === commentElement?.scrollHeight) || linesCount < 4) {
      setIsCommentClamped(false)
    }
  }, [commentElement?.clientHeight, commentElement?.scrollHeight, commentElementHeight, isCommentClamped])

  return (
    <div className={commentClasses}>
      <div className="comment-infos">
        <Avatar
          avatarUrl={comment.profile.profile_picture_file_url}
          className="comment-infos__profile"
          name={comment.profile.name}
        />
        <div className="relative-date">{getRelativeDate(comment.created_at)}</div>
      </div>
      <div className="comment-content">
        <div className={commentValueClasses} ref={commentRef}>
          {comment.content}
        </div>
        {isCommentClamped ? (
          <button className="more-action reset-button-style" onClick={handleMoreClick}>
            more
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Comment
