import type { VFC } from "react"

interface Props {
  title: string
  description: string
}
const TextBlock: VFC<Props> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}
export default TextBlock
