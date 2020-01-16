import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import Responsive from "./responsive"

const Revealer = ({ children }) => {
  return (
    <Responsive>
      {matches =>
        matches && matches.print ? (
          <>{children}</>
        ) : (
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => <div style={{ opacity }}>{children}</div>}
              </Spring>
            )}
          </VisibilitySensor>
        )
      }
    </Responsive>
  )
}

export default Revealer
