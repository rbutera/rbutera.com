import { createGlobalStyle } from "styled-components"
import tw from "tailwind.macro"

import "./tailwind.css"
import "./fonts.css"

export default createGlobalStyle`
  /* apply a natural box layout model to all elements, but allowing components to change */
  
  body {
    ${tw`font-sans text-gray-900 flex flex-col items-center`};
    font-family: 'aktiv-grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
  }
`
