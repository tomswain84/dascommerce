import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { FC } from "react"

interface FeatureItemProps {
  text?: string
}
const ListItem: FC<FeatureItemProps> = ({ text, children }) => {
  return (
    <li className="position-relative ps-4">
      <FontAwesomeIcon icon="dot-circle" className="me-2 text-red position-absolute start-0" />
      {text && (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      )}
      {children}
    </li>
  )
}
export default ListItem