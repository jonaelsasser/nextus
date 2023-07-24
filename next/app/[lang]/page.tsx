import React from 'react'
import directusApi from '@/lib/utils/directus-api'
import { readItems } from '@directus/sdk'
import PageBuilder from '@/components/PageBuilder'
import { Pages } from '@/lib/directus-collections'

export default async function PageRoute() {
  const pages = await directusApi.request(
    readItems('pages', {
      filter: {
        slug: { _eq: 'home' },
      },
      fields: [
        '*',
        { seo: ['*'] },
        {
          blocks: [
            'collection',
            {
              item: {
                block_hero: ['*'],
                block_faqs: ['*'],
                block_quote: ['*'],
                block_columns: ['*', { rows: ['*'] }],
                block_form: ['*', { form: ['*'] }],
                block_testimonials: [
                  '*',
                  { testimonials: ['*', { testimonial: ['*'] }] },
                ],
                block_logocloud: ['*', { logos: [{ file: ['*'] }] }],
                block_team: ['*'],
                block_cta: ['*'],
                block_richtext: ['*'],
                block_steps: ['*', { steps: ['*'] }],
                block_gallery: [
                  '*',
                  { gallery_items: ['*', { directus_files_id: ['*'] }] },
                ],
                block_cardgroup: ['*', { posts: [{ posts_id: ['*'] }] }],
                block_html: ['*'],
                block_video: ['*'],
              },
            },
          ],
        },
      ],
      limit: 1,
    })
  )

  if (pages.length === 0) return null

  return <>{pages[0] && <PageBuilder page={pages[0]} />}</>
}
