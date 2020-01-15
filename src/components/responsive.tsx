import React from "react"
import Media from "react-media"

export const BREAKPOINTS = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 376,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}
const { sm, md, lg, xl } = BREAKPOINTS

const Responsive = ({ children }) => {
  return (
    <Media
      queries={{
        xs: `screen and (max-width: ${sm - 1}px)`,
        sm: `screen and (min-width: ${sm}px) and (max-width: ${md - 1}px)`,
        md: `screen and (min-width: ${md}px) and (max-width: ${lg - 1}px)`,
        lg: `screen and (min-width: ${lg}px) and (max-width: ${xl - 1}px)`,
        xl: `screen and (min-width: ${xl}px)`,
        print: `print`,
      }}
    >
      {children}
    </Media>
  )
}

export default Responsive
