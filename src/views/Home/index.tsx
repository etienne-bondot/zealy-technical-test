import type { ReactElement } from 'react'

import { getRandomValue } from '~/api/fake-request'
import HelloWorld from '~/components/HelloWorld'
import useRequest from '~/hooks/useRequest'

import './styles.scss'

const Home = (): ReactElement => {
  const { isLoading } = useRequest<number, number>(getRandomValue, 3000)

  return (
    <>
      <HelloWorld />
      {isLoading && <span className="loader-component">Loading...</span>}
    </>
  )
}

export default Home
