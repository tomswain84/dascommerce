import { useRouter } from "next/router"
import en from './en.json'
import de from './de.json'

const useTrans = () => {
  const { locale } = useRouter()
  const language = locale === 'de' ? de : en
  return {
    $html: (key: keyof typeof language) => ({ __html: language[key].html }),
    say: (key: keyof typeof language) => language[key].html.replace(/\&nbsp/, '&'),
  }
}
export default useTrans