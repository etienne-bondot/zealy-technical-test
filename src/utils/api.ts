import axios from 'axios'

import type { AxiosRequestConfig, AxiosError } from 'axios'
import type { IApiError } from '~/types/api'

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const { data } = await axios
    .request<T>({
      method: 'GET',
      ...config,
      headers: {
        ...config.headers,
      },
    })
    .catch((e: AxiosError<IApiError>) => Promise.reject(e))

  return data
}
