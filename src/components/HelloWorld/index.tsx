import type { ReactElement } from 'react'

import ZealySVG from '~/assets/zealy.svg'

import './styles.scss'

const HelloWorld = (): ReactElement => {
  return (
    <div className="helloworld-component">
      <span>Hello world!</span>
      <img src={ZealySVG} />
    </div>
  )
}

export default HelloWorld
