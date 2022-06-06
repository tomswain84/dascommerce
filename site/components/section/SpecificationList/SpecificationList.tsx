import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

interface FeatureItemProps {
  text: string
}
const FeatureItem: VFC<FeatureItemProps> = ({ text }) => {
  return (
    <li>
      <FontAwesomeIcon icon="dot-circle" className="me-1 text-red" />
      {text}
    </li>
  )
}

interface FeatureColumnProps {
  type?: 'list' | 'button'
  title: string
  items?: string[]
  button?: {
    text: string
    href: string,
    blank?: boolean,
    description?: string
  }
}
const FeatureColumn: VFC<FeatureColumnProps> = ({ title, items, type: _type, button }) => {
  const type = _type || 'list'
  return (
    <div className="col">
      <h3 className="text-red mb-2">{title}</h3>
      {type === 'list' && items && (
        <ul className="list-unstyled">
          {items.map((item, index) => (
            <FeatureItem key={index} text={item} />
          ))}
        </ul>
      )}
      {type === 'button' && button && (
        <>
          <a className="btn btn-outline-primary" href={button.href} target={button.blank ? '_blank' : '_self'} title={button.text} rel="noreferrer">{button.text}</a>
          {button.description && <p>{button.description}</p>}
        </>
      )}
    </div>
  )
}

interface HeadingRow {
  type: 'heading'
  heading: string
}
interface FeatureRow {
  type: 'feature'
  columns: FeatureColumnProps[][]
}
interface FeatureListProps {
  rows: Array<HeadingRow | FeatureRow>
}
const FeatureList: VFC<FeatureListProps> = ({ rows }) => {
  return (
    // keyboardSpects
    <section id="keyboardSpects" className="content-container bg-gray-darker dark-section section-pad">
      <div id="contentContainer" className="container-boxed">
        {rows.map((row, index) => (
          <div className={`row ${index && row.type === 'heading' ? 'mt-5' : ''}`} key={index}>
            {row.type === 'heading' && (
              <div className="col">
                <h2>{row.heading}</h2>
              </div>
            )}
            {row.type === 'feature' && (
              <>
                {row.columns.map((columns, rowColIndex) => (
                  <div className="col" key={rowColIndex}>
                    {columns.map((column, colIndex) => (
                      <FeatureColumn key={colIndex} {...column} />
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
export default FeatureList
