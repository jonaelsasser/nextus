import React from 'react'
import directusApi from '@/lib/utils/directus-api'
import { readItems } from '@directus/sdk'
import { Page } from '@/lib/schemas'
import PageBuilder from '@/components/PageBuilder'

export default async function PageRoute() {
  const pages = (await directusApi.request(
    readItems('pages', {
      filter: {
        slug: { _eq: 'home' },
      },
      fields: [
        '*',
        'seo.*',
        'blocks.collection',
        'blocks.item.*',
        'blocks.item.testimonials.testimonial.*',
        'blocks.item.logos.file.*',
        'blocks.item.form.*',
        'blocks.item.steps.*',
        'blocks.item.gallery_items.directus_files_id.*',
        'blocks.item.*',
        'blocks.item.rows.*',
        'blocks.item.posts.posts_id.*',
      ],
      limit: 1,
    })
  )) as Array<Page>

  if (pages.length === 0) return null

  return (
    <>
      <PageBuilder page={pages[0]} />
    </>
  )
}
