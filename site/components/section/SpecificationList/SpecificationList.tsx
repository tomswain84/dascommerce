import ListItem from "@components/core/ListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"
interface FeatureColumnProps {
  type?: 'list' | 'button'
  title?: string
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
    <>
      {title && (
        <h3 className="text-red mb-2" dangerouslySetInnerHTML={{ __html: title }} />
      )}
      {type === 'list' && items && (
        <ul className={`list-unstyled ${!title ? 'mt-4' : ''}`}>
          {items.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </ul>
      )}
      {type === 'button' && button && (
        <>
          <a className="btn btn-outline-primary" href={button.href} target={button.blank ? '_blank' : '_self'} rel="noreferrer" dangerouslySetInnerHTML={{ __html: button.text }} />
          {button.description && <p dangerouslySetInnerHTML={{ __html: button.description }} />}
        </>
      )}
    </>
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
  id: string
  background: 'dark' | 'darker'
  rows: Array<HeadingRow | FeatureRow>
}
const SpecificationList: VFC<FeatureListProps> = ({ id: sectionId, background, rows }) => {
  return (
    <section id={sectionId} className={`content-container dark-section section-pad bg-gray-${background}`}>
      <div id="contentContainer" className="container-boxed">
        {rows.map((row, index) => (
          <div className={`row ${index && row.type === 'heading' ? 'mt-5' : ''}`} key={index}>
            {row.type === 'heading' && (
              <div className="col">
                <h2 dangerouslySetInnerHTML={{ __html: row.heading }} />
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
export default SpecificationList
