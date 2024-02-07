import type { InputHTMLAttributes, ReactElement } from 'react'

import './styles.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextInput = ({ ...props }: Props): ReactElement => {
  return (
    <div className="text-input-component">
      <input className="text-input-component__input" {...props} autoComplete="off" type="text" />
    </div>
  )
}

export default TextInput
