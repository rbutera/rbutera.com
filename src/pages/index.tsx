import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import resumeData from "../data/resume.json"
import Logo from "../images/logo/RBxo-emblem.svg"
import profilePhoto from "../images/rai.jpg"

const Container = styled.article`
  ${tw`relative`}
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
      <FontAwesomeIcon icon={faHeart} size={32} />
    </LoveStyle>
  )
}

const PersonalLogo = styled.img`
  ${tw`w-40 pb-1`}
`

const Icon = styled.span`
  ${tw`inline-block text-gray-500 mx-1`}
`

const Profile = styled.aside`
  ${tw`w-auto absolute top-0 right-0`}
  ul li {
    &:first-of-type {
      ${tw`text-xl font-bold`}
    }
    ${tw`flex flex-row items-center`}
  }
`

const SectionStyle = styled.section`
  ${tw`flex flex-row my-4`}

  & > h1 {
    ${tw`flex-none w-40 uppercase tracking-widest text-right text-gray-600 text-xl`}
  }
`

const SectionContent = styled.p`
  ${tw`flex-auto px-4`}
  & > p {
    ${tw`mb-2`}
  }
`
const Columns = styled.div`
  ${tw`flex flex-row`}
`

const Column = styled.div`
  ${tw`inline-block flex-auto`}

  & > h2 {
    ${tw`text-lg`}
  }
`

const ListStyle = styled.ul`
  display: grid;
  grid-auto-flow: row dense;
  /* grid-template-rows: repeat(1fr); */

  li {
    ${tw`inline-block`}
  }
`

const List = ({ items }) => {
  return (
    <ListStyle>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ListStyle>
  )
}

const Section = ({ children, title }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      <SectionContent>{children}</SectionContent>
    </SectionStyle>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="CV / Resume" />
    <Container className="container">
      <Profile>
        <PersonalLogo src={Logo} alt="Raimondo Butera personal logo" />
        <ul>
          <li>{resumeData.profile.name}</li>
          <li>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
            {resumeData.profile.email}
          </li>
          <li>
            <Icon>
              <FontAwesomeIcon icon={faPhone} />
            </Icon>
            {resumeData.profile.phone}
          </li>
          <li>
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
            </Icon>
            {resumeData.profile.github}
          </li>
          <li>
            <Icon>
              <FontAwesomeIcon icon={faMedium} />
            </Icon>
            {resumeData.profile.medium}
          </li>
          <li>
            <Icon>
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
            {resumeData.profile.twitter}
          </li>
        </ul>
      </Profile>

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
        <Columns>
          {resumeData.skills.data.map(skill => (
            <Column>
              <h2>{skill.category}</h2>
              <ul>
                {skill.related.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </Column>
          ))}
        </Columns>
      </Section>
      <Section title={resumeData.languages.title}>
        <List items={resumeData.languages.data} />
      </Section>
      <Section title={resumeData.libraries.title}>
        <List items={resumeData.libraries.data} />
      </Section>
      <Section title={resumeData.technologies.title}>
        <List items={resumeData.technologies.data} />
      </Section>
      <Section title={resumeData.tools.title}>
        <List items={resumeData.tools.data} />
      </Section>
      <Section title={resumeData.education.title}>
        <Columns>
          {resumeData.education.data.map(educationLevel => (
            <Column>
              <h2>{educationLevel.heading}</h2>
              {educationLevel.detail.map(line => (
                <p>{line}</p>
              ))}
            </Column>
          ))}
        </Columns>
      </Section>
      <Section title={resumeData.experience.title}>
        <Columns>
          {resumeData.experience.data.map(item => (
            <Column>
              <p>
                {item.start} - {item.end}
              </p>
              <h2>{item.company}</h2>
              {item.roles.map(line => (
                <p>{line}</p>
              ))}
            </Column>
          ))}
        </Columns>
      </Section>
      <Section title={resumeData.passions.title}>
        <List items={resumeData.passions.data} />
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
