import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

interface ISEOProps {
  title: string
  metaTitle?: string
  desc?: string
  preview?: string
  largePreview?: boolean
}

export default function SEO({ title, metaTitle, desc, preview }: ISEOProps) {
  const { t } = useTranslation()

  const defaultDesc = t('common:desc')
  const defaultPreview = '/preview.png'

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={metaTitle || title} />
      <meta name="description" content={desc || defaultDesc} />
      <meta property="og:title" content={metaTitle || title} />
      <meta property="og:description" content={desc || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={preview || defaultPreview} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="p:domain_verify" content="ff980f58d99693572ff0cb8e04a1bd76" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
