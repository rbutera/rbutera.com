import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Heart, Mail, Phone } from "react-feather"
const resumeData = require("../data/resume.json")
import Logo from "../images/logo/TikTokStyle.png"
import profilePhoto from "../images/rai.jpg"

const Anchor = styled.a`
  ${tw`font-bold text-blue-600 hover:text-blue-300 mx-1`}
`

const ResumeHeader = ({ children }) => {
  return <>{children}</>
}

const Portrait = styled.img`
  ${tw`w-48 h-48 bg-gray-200 block select-none`}
`

const Caption = styled.span`
  ${tw`inline-block h-auto w-64 bg-white w-100 p-5`}

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

const PersonalLogo = styled.img`
  ${tw`w-40 pb-1`}
`

const Icon = styled.span`
  ${tw`inline-block text-gray-500 mx-1`}
`

const ProfileStyle = styled.aside`
  ${tw`w-auto`}
  ul li {
    &:first-of-type {
      ${tw`text-xl font-bold`}
    }
    ${tw`flex flex-row items-center`}
  }
`

const Profile = () => {
  return (
    <ProfileStyle>
      <PersonalLogo src={Logo} alt="Raimondo Butera personal logo" />
      <ul>
        <li>Raimondo Butera</li>
        <li>
          <Icon>
            <Mail />
          </Icon>
          rai@rbutera.com
        </li>
        <li>
          <Icon>
            <Phone />
          </Icon>
          +447780688428
        </li>
      </ul>
    </ProfileStyle>
  )
}

const SectionStyle = styled.section`
  ${tw`flex flex-row my-4`}

  & > h1 {
    ${tw`flex-none w-40 uppercase tracking-widest text-right text-gray-600`}
  }

  & > p {
    ${tw`flex-auto flex flex-row`}
    p {
      ${tw`mb-2`}
    }
  }
`

const Subsection = styled.section``

const Section = ({ children, title }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      <p>{children}</p>
    </SectionStyle>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="CV / Resume" />

    <Profile />

    <ResumeHeader>
      <Portrait src={profilePhoto} alt="a photo of Rai" />
      <Caption>
        <p>Hi, I'm Rai,</p>
        <p>
          and I <Love /> innovation.
        </p>
      </Caption>
    </ResumeHeader>

    <Section title={resumeData.bio.title}>
      {resumeData.bio.data.map(line => (
        <p>{line}</p>
      ))}
    </Section>

    <Section title={resumeData.skills.title}>
      {resumeData.skills.data.map(skill => (
        <Subsection>
          <h2>{skill.category}</h2>
          <p>{skill.related}</p>
        </Subsection>
      ))}
    </Section>
    <Section title={resumeData.languages.title}>
      {JSON.stringify(resumeData.languages.data)}
    </Section>
    <Section title={resumeData.libraries.title}>
      {JSON.stringify(resumeData.libraries.data)}
    </Section>
    <Section title={resumeData.technologies.title}>
      {JSON.stringify(resumeData.technologies.data)}
    </Section>
    <Section title={resumeData.tools.title}>
      {JSON.stringify(resumeData.tools.data)}
    </Section>
    <Section title={resumeData.education.title}>
      {JSON.stringify(resumeData.education.data)}
    </Section>
    <Section title={resumeData.experience.title}>
      {JSON.stringify(resumeData.experience.data)}
    </Section>
    <Section title={resumeData.passions.title}>
      {JSON.stringify(resumeData.passions.data)}
    </Section>
  </Layout>
)

export default IndexPage
