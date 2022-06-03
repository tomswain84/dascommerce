import { Tooltip as BsTooltip } from "bootstrap"
import React, { useEffect, useRef } from "react"
import type { FC } from 'react'

const Tooltip: FC<{ text: string }> = (props) => {
  const childRef = useRef(undefined as unknown as Element)

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && childRef.current) {
      console.log(childRef.current)
      // const t = new BsTooltip(childRef.current, {
      //   title: props.text,
      //   placement: "right",
      //   trigger: "hover"
      // })
      // return () => t.dispose()
    }
  }, [props.text])

  return React.cloneElement(<>{props.children}</>, { ref: childRef })
}
export default Tooltip