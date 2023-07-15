import { getDirectusURL } from './api-helpers'
import { Schema } from '@/types/schemas'
// @ts-ignore
import { authentication, createDirectus, rest } from '@directus/sdk'

const directusApi = createDirectus<Schema>(getDirectusURL())
  .with(
    rest({
      onRequest: (currentOptions: RequestInit) => {
        // add any fetch properties you want
        return {
          ...currentOptions,
          next: { revalidate: 3 },
        }
      },
    })
  )
  .with(authentication('json', { autoRefresh: false }))

directusApi.setToken(process.env.NEXT_PUBLIC_DIRECTUS_TOKEN || '')

export default directusApi
