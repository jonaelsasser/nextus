import React from 'react'
import VButton from '../base/VButton'
import BlockContainer from '../BlockContainer'
import { getDirectusMedia } from '@/lib/utils/api-helpers'
import Image from 'next/image'
import { BlockHero } from '@/lib/directus-collections'

interface Hero {
  id: string
  headline: string
  content: string
  image: string
  buttons?: Array<{
    label: string
    href: string
    variant: string
    open_in_new_window: boolean
  }>
}

interface HeroBlockProps {
  data: BlockHero
}

function HeroBlock({ data }: HeroBlockProps) {
  return (
    <BlockContainer className='relative grid gap-6 md:grid-cols-3'>
      {/* Content */}
      <div className=' md:col-span-2 md:pt-12'>
        <h1
          className='xs:text-5xl color-em font-serif text-4xl font-extrabold leading-9  sm:text-7xl lg:text-8xl'
          dangerouslySetInnerHTML={
            data.headline ? { __html: data.headline } : undefined
          }
        />
        <p className='w-full py-6 font-serif text-xl lg:text-2xl lg:leading-loose'>
          {data.content}
        </p>
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          {data.buttons &&
            data.buttons.map((button, buttonIdx) => (
              <VButton
                key={button.label}
                href={button.href}
                variant={button.variant}
                target={button.open_in_new_window ? '_blank' : '_self'}
                size='lg'
              >
                {button.label}
              </VButton>
            ))}
        </div>
      </div>
      {/* Image */}
      <div className=''>
        {data.image && (
          <div className='rounded-tl-[64px] border-2 border-primary p-2  md:-mr-16 lg:relative lg:-mr-48 lg:h-full'>
            <Image
              className='max-h-[700px] w-full overflow-hidden rounded-tl-[56px] object-cover'
              width='500'
              height='500'
              src={getDirectusMedia(data.image) as any}
              alt=''
            />
          </div>
        )}
      </div>
    </BlockContainer>
  )
}

export default HeroBlock
