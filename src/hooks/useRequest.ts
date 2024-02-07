/**
 * A hook example.
 */

import { useEffect, useState } from 'react'

const useRequest = <TData, TArgs>(
  fn: (args: TArgs) => Promise<TData>,
  args: TArgs
): { data?: TData; error?: unknown; isLoading: boolean } => {
  const [data, setData] = useState<TData>()
  const [error, setError] = useState<unknown>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function call() {
      setLoading(true)

      try {
        const data = await fn(args)
        setData(data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    call()
  }, [args, fn])

  return { data, error, isLoading }
}

export default useRequest
