import React from "react"
import Revealer from "./revealer"
import tw from "tailwind.macro"
import styled from "styled-components"

const Section = styled.section`
  ${tw`min-h-screen h-screen w-64 block py-8 px-8`}
`

const MultipleSections = ({ children }) => {
  const colors = ["bg-yellow-300", "bg-orange-400", "bg-red-400"]
  return (
    <>
      {colors.map(color => (
        <Section className={color}>{children}</Section>
      ))}
    </>
  )
}

export default {
  title: "Revealer",
}

export const normal = () => (
  <>
    <MultipleSections>
      <Revealer>Reveal this on scroll</Revealer>
    </MultipleSections>
  </>
)
