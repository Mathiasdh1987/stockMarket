export const dateToLocaleString = (lang: string, raw: string) => {
  const date = new Date(raw)
  return date.toLocaleDateString(lang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const langToISO = (lang: string, i?: number) =>
  lang.includes('-') ? lang.split('-')[i === undefined ? 1 : i] : lang

export const langToEmojiFlag = (lang: string) => {
  // eslint-disable-next-line no-param-reassign
  lang = langToISO(lang)
  // credits: Wojciech Maj (wojtekmaj)
  // https://github.com/wojtekmaj/country-code-to-flag-emoji
  return lang
    .split('')
    .map((c: any) =>
      String.fromCodePoint(c.toLowerCase().charCodeAt() + 127365)
    )
    .join('')
}

export const normalizeHTML = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '').trim()
}

export const isAppleDevice = () => {
  return /iPhone|iPod|iPad|Mac/.test(window.navigator.platform)
}
