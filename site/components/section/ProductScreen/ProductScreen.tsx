import type { VFC } from "react"

interface Props {
  title: string
  description: string
  hasScreenBase: boolean
  background: 'white' | 'gray-lighter' | 'gray-darker'
}
const ProductScreen: VFC<Props> = ({ title, description, hasScreenBase, background }) => {
  return (
    <>Product SCREEN</>
  )
}
export default ProductScreen
