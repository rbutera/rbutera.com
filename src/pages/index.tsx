import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"

const Anchor = styled.a`
  ${tw`font-bold text-blue-600 hover:text-blue-300 mx-1`}
`

const ResumeHeader = ({ children }) => {
  return <>{children}</>
}

const Heart = () => {
  return <>love</>
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
      <p>Hi, I'm Rai,</p>
      <p>
        and I <Heart /> innovation
      </p>
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
