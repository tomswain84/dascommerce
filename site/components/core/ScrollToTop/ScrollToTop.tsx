import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VFC } from "react"

const ScrollToTop: VFC = () => {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div
      className="text-red"
      style={{
        bottom: 40,
        right: 20,
        position: 'fixed',
        zIndex: 9999,
        border: '1px solid #00000010',
        boxShadow: '1px 1px 5px #00000010',
        backgroundColor: '#ffffff90',
        borderRadius: '50%',
        width: 50,
        height: 50,
        textAlign: 'center',
        lineHeight: '50px',
        cursor: 'pointer',
        fontSize: '30px',
        transition: 'all .3s ease',
      }}
      onClick={scrollTop}
    >
      <FontAwesomeIcon icon='arrow-up' />
    </div>
  )
}
export default ScrollToTop