import React from "react"
import { Spring } from "react-spring/renderprops"
import VSensor from "./VSensor"
import Responsive from "./responsive"

const Revealer = ({ children }) => {
  return (
    <Responsive>
      {matches =>
        matches && matches.print ? (
          <>{children}</>
        ) : (
          <VSensor once partialVisibility>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => <div style={{ opacity }}>{children}</div>}
              </Spring>
            )}
          </VSensor>
        )
      }
    </Responsive>
  )
}

export default Revealer
