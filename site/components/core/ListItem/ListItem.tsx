import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { FC } from "react"

interface FeatureItemProps {
  text?: string,
  increaseLineHeight?: boolean
}
const ListItem: FC<FeatureItemProps> = ({ text, children, increaseLineHeight }) => {
  return (
    <li className={`position-relative ps-4 ${increaseLineHeight ? 'lh-base' : ''}`}>
      <FontAwesomeIcon icon="dot-circle" className="me-2 text-red position-absolute start-0" />
      {text && (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      )}
      {children}
    </li>
  )
}
export default ListItem