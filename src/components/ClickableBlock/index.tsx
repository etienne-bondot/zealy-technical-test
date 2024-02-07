import classNames from 'classnames'
import { useState } from 'react'
import Modal from 'react-modal'

import type { ChangeEvent, KeyboardEvent, PropsWithChildren, ReactElement } from 'react'
import type { IComment } from '~/types/comment'

import Comment from '~/components/Comment'
import CommentsBlock from '~/components/CommentsBlock'
import TextInput from '~/components/TextInput'
import dayjs from '~/utils/dayjs'

import './styles.scss'

const ClickableBlock = ({ children }: PropsWithChildren): ReactElement => {
  /** Local state */

  const [isModalOpened, setIsModalOpened] = useState(false)

  const [comments, setComments] = useState<IComment[]>([])

  const [commentValue, setCommentValue] = useState('')

  /** Handlers */

  const handleOpenModal = (isOpen: boolean) => () => setIsModalOpened(isOpen)

  const handleCommentValueChange = (evt: ChangeEvent<HTMLInputElement>) =>
    evt.target.value.length && setCommentValue(evt.target.value)

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' && commentValue) {
      const newComment = {
        content: commentValue,
        created_at: dayjs().unix(),
        profile: {
          name: 'John Doe',
          profile_picture_file_url: '',
        },
      }

      setComments((prevState) => [...prevState, newComment])
      setCommentValue('')
    }
  }

  return (
    <>
      <div
        className={classNames('clickable-block-component', {
          'clickable-block-component--has-comments': comments.length,
        })}
        id="clickable-block"
        onClick={handleOpenModal(true)}
      >
        {children}
      </div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={handleOpenModal(false)}
        // @ts-expect-error () => HTMLElement | null' / '() => HTMLElement
        parentSelector={() => document.querySelector('#clickable-block')}
        style={{
          content: {
            backgroundColor: '#313131',
            left: '100%',
            top: 0,
          },
          overlay: {
            backgroundColor: 'transparent',
            position: 'absolute',
          },
        }}
      >
        <div className="comments-tooltip-overlay">
          {comments.length ? (
            <>
              <CommentsBlock>
                {comments.map((comment, idx) => (
                  <Comment comment={comment} key={idx} />
                ))}
              </CommentsBlock>
              <TextInput
                onChange={handleCommentValueChange}
                onKeyDown={handleKeyDown}
                placeholder="Add a comment"
                value={commentValue}
              />
            </>
          ) : (
            <TextInput
              onChange={handleCommentValueChange}
              onKeyDown={handleKeyDown}
              placeholder="Add a comment"
              value={commentValue}
            />
          )}
        </div>
      </Modal>
    </>
  )
}

export default ClickableBlock
