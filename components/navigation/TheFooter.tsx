import { NavigationItems } from '@/lib/directus-collections'
import {
  fetchForm,
  fetchGlobals,
  fetchNavigationSafe,
} from '@/lib/utils/directus-api'
import TypographyTitle from '@/components/typography/TypographyTitle'
import TypographyHeadline from '@/components/typography/TypographyHeadline'
import VIcon from '@/components/base/VIcon'
import Link from 'next/link'
import VForm from '@/components/base/VForm'

async function TheFooter({ lang = 'zh' }: { lang?: string }) {
  function getUrl(item: NavigationItems) {
    if (item.type === 'page' && typeof item.page !== 'string') {
      return `/${item.page?.slug}`
    } else {
      return item?.url ?? ''
    }
  }

  const [globals, navigation, form] = await Promise.all([
    fetchGlobals(lang),
    fetchNavigationSafe('footer', lang),
    fetchForm('newsletter'),
  ])
  const globalData = globals.translations && globals.translations[0]

  return (
    <footer
      className='relative rounded-br-3xl rounded-tl-3xl  px-6 pb-8 md:mx-6 md:mb-6'
      aria-labelledby='footer-heading'
    >
      <div className='mx-auto py-12 md:px-12'>
        {/* Header */}
        <div className='flex justify-between'>
          <div className='w-full'>
            <p className='mt-2 font-mono text-sm text-base-200'>
              {globalData?.tagline}
            </p>
          </div>
          <div className='flex w-full items-center justify-end space-x-2'>
            {/* <DarkModeToggle className="hidden text-gray-600 md:block hover:text-gray-400" /> */}
          </div>
        </div>

        {/* Navigation + Form */}
        <nav className='mt-8 grid gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0'>
          <div>
            <TypographyTitle>{navigation.title}</TypographyTitle>
            <ul role='list' className='mt-4 grid grid-flow-col md:grid-cols-2'>
              {navigation &&
                navigation.items &&
                navigation.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={getUrl(item)}
                      className='font-mono font-medium '
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className='relative overflow-hidden rounded-br-3xl rounded-tl-3xl border-2 border-accent p-6 md:grid md:grid-cols-1 lg:justify-end'>
            <div className='absolute inset-0 ' />
            <div className='grain-bg absolute inset-0 dark:opacity-10' />
            <div className='relative w-full md:mt-0'>
              <TypographyHeadline content={form.title}></TypographyHeadline>
              {form && <VForm className='mt-4' form={form} />}
            </div>
          </div>
        </nav>
      </div>

      {/* Bottom */}
      <div className='mx-auto max-w-7xl border-t py-6  md:flex md:items-center md:justify-between lg:px-16'>
        <div className='flex items-center justify-center space-x-6 md:order-last md:mb-0'>
          {globalData &&
            globalData.social_links &&
            globalData.social_links.map((link) => (
              <a
                key={link.service}
                href={link.url}
                target='_blank'
                className='h-6 w-6 '
              >
                <span className='sr-only'>{link.service}</span>
                {
                  <VIcon
                    className='h-8 w-8  hover:opacity-75 '
                    icon={`mdi:${link.service}`}
                  />
                }
              </a>
            ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <span className='mt-2 font-serif'>
            Copyright © 1995 - {new Date().getFullYear()}
            <a
              href='/'
              className='mx-2 hover:text-accent'
              rel='noopener noreferrer'
            >
              {globalData?.title ?? 'site title'}.
            </a>
            All rights reserved.
          </span>
          {/* You're free to remove this footer if you want. But we'd appreciate it if you keep the credits. */}
          <span className='mt-2 font-serif '>
            <VIcon icon='heroicons:bolt' className='h-4 w-4 text-accent' />
            Site powered by
            <Link
              href='https://www.directus.io?ref=agencyos_footer'
              target='_blank'
              rel='noopener noreferrer'
              className=' border-b hover:text-accent'
            >
              Directus
            </Link>
            and
            <Link
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b hover:text-accent'
            >
              NextJs
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
