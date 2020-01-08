import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Heart } from "react-feather"

const Anchor = styled.a`
  ${tw`font-bold text-blue-600 hover:text-blue-300 mx-1`}
`

const ResumeHeader = ({ children }) => {
  return <>{children}</>
}

const Portrait = styled.div`
  ${tw`w-40 h-40 bg-green-400 block`}
`

const Caption = styled.span`
  ${tw`bg-white w-100 p-8`}

  p {
    ${tw`flex flex-row text-4xl items-center m-0 p-0`};
  }
`

const LoveStyle = styled.span`
  ${tw`inline-block mx-1 text-red-400`};
`

const Love = () => {
  return (
    <LoveStyle>
      <Heart size={32} />
    </LoveStyle>
  )
}

const Profile = () => {
  return (
    <>
      <ul>
        <li>Logo</li>
        <li>Name</li>
        <li>Email</li>
        <li>Phone</li>
      </ul>
    </>
  )
}

const Section = ({ children }) => {
  return <section>{children}</section>
}

const IndexPage = () => (
  <Layout>
    <SEO title="CV / Resume" />

    <ResumeHeader>
      <Portrait />
      <Caption>
        <p>Hi, I'm Rai,</p>
        <p>
          and I <Love /> innovation.
        </p>
      </Caption>
    </ResumeHeader>

    <Profile />

    <Section>bio</Section>
    <Section>skills</Section>
    <Section>languages</Section>
    <Section>libraries</Section>
    <Section>technologies</Section>
    <Section>tools</Section>
    <Section>education</Section>
    <Section>experience</Section>
    <Section>passions</Section>
  </Layout>
)

export default IndexPage
