import { useRouter } from "next/router"
import en from './en.json'
import de from './de.json'

const useTrans = () => {
  const { locale } = useRouter()
  const language = locale === 'de' ? de as unknown as typeof en : en
  const getHtml = (key: keyof typeof en) => {
    let result = en[key]
    if (language[key]) {
      result = (language as typeof en)[key]
    }
    return result || ''
  }
  return {
    $html: (key: keyof typeof en) => {
      return {
        __html: getHtml(key)
      }
    },
    say: (key: keyof typeof en) => getHtml(key).replace(/\&nbsp/, '&'),
  }
}
export default useTrans