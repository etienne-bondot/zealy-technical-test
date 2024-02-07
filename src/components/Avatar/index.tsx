import classNames from 'classnames'

import type { ReactElement } from 'react'

import AvatarPlaceholder from '~/assets/avatar-placeholder.png'

import './styles.scss'

interface Props {
  avatarUrl?: string
  className?: string
  name: string
}

const Avatar = ({ avatarUrl, className, name }: Props): ReactElement => {
  return (
    <div className={classNames('avatar-component', className)}>
      <img
        alt={avatarUrl ? 'Avatar' : 'Default avatar'}
        className="avatar-component__image"
        height={40}
        placeholder="blur"
        src={avatarUrl || AvatarPlaceholder}
        width={40}
      />
      <div className="avatar-component__name" title={name || 'unknown'}>
        {name || 'unknown'}
      </div>
    </div>
  )
}

export default Avatar
