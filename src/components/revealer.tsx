import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import Responsive from "./responsive"

const Revealer = ({ children }) => {
  return (
    <Responsive>
      {matches =>
        matches && !matches.print ? <>Not Print: {children}</> : <>{children}</>
      }
    </Responsive>
  )
}

export default Revealer
