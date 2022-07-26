import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

interface Props {
  href: string
  label: string
  ext: string | 'JPG' | 'PNG'
}
const DownloadButton: VFC<Props> = ({ href, label, ext }) => {
  return (
    <a className="btn btn-outline-primary text-gray-dark mt-2 position-relative" href={href} title="Download" download>
      <i className="me-2"><FontAwesomeIcon icon='download' /></i>
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <span className="position-absolute start-100 top-50 translate-middle badge rounded-pill bg-gray-light">{ext}</span>
    </a>
  )
}
export default DownloadButton