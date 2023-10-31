import axios from './axios'

export type FetchApiOptions = {
  url: string
  isPayload?: boolean
}

export async function fetchApi(
  options: FetchApiOptions,
  params?: Record<string, any>
): Promise<any> {
  const { url, isPayload } = options

  const config: Record<string, any> = {
    url,
    method: 'post',
    errorTitle: '获取数据'
  }

  if (isPayload === true) {
    config.data = params
  } else {
    config.params = params
  }

  return axios(config)
}
