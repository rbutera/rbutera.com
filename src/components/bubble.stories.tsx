import React from "react"
import Bubble from "./bubble"
import { withKnobs, text } from "@storybook/addon-knobs"
import styled from "styled-components"
import tw from "tailwind.macro"

export default {
  title: "Bubble",
  decorators: [withKnobs],
}

const Contents = () => {
  const first = text("First line text", "First line")
  const second = text("Second line text", "Second line")
  return (
    <>
      <p>{first}</p>
      <p>{second}</p>
    </>
  )
}

export const normal = () => (
  <Bubble>
    <Contents />
  </Bubble>
)

const Container = styled.div`
  ${tw`block`}
  width: 100%;
  min-width: 375px;
`

export const insideContainer = () => (
  <Container>
    <Bubble>
      <Contents />
    </Bubble>
  </Container>
)
