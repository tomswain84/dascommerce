import { useRouter } from "next/router"
import en from './en.json'
import de from './de.json'

export type TranslateKey = keyof typeof en

export function getTrans(locale: string | undefined) {
  const language = locale === 'de' ? de as unknown as typeof en : en
  const getHtml = (key: TranslateKey, getRaw = false) => {
    let result = en[key]
    if (language[key]) {
      result = (language as typeof en)[key]
    }
    if (result && !getRaw) {
      return `<span data-translate-id="${key}">${result}</span>`
    }
    return result || ''
  }
  return {
    $html: (key: TranslateKey) => {
      return {
        __html: getHtml(key)
      }
    },
    say: (key: TranslateKey, getRaw = false) => getHtml(key, getRaw).replace(/\&nbsp/, '&'),
    formatPrice(price: number, currency = '$') {
      if (locale === 'de') {
        return `${price}${currency}`
      }
      else {
        return `${currency}${price}`
      }
    }
  }
}

const useTrans = () => {
  const { locale } = useRouter()
  return getTrans(locale)
}

export default useTrans