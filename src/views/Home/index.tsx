import type { ReactElement } from 'react'

import ZealySVG from '~/assets/zealy.svg'
import ClickableBlock from '~/components/ClickableBlock'
import HelloWorld from '~/components/HelloWorld'

import './styles.scss'

const Home = (): ReactElement => {
  return (
    <div className="home-view">
      <img src={ZealySVG} />
      <ClickableBlock>
        <HelloWorld />
      </ClickableBlock>
    </div>
  )
}

export default Home
