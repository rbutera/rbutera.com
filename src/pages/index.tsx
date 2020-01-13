import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import { sortBy, prop } from "rambda"
import resumeData from "../data/resume.json"
import Logo from "../images/logo/RBxo-emblem.svg"
import profilePhoto from "../images/rai.jpg"

const Container = styled.article`
  ${tw`relative w-full max-w-screen px-8`}

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-template-areas: "sidebar" "content";
  @media screen and (min-width: 700px) {
    grid-template-areas: "content sidebar";
    grid-template-columns: 1fr auto;
  }

  h2 {
    ${tw`text-gray-800 leading-tight`}
  }

  ul li {
    ${tw`text-gray-800 md:text-gray-700`};
  }
`

const ResumeBody = styled.div`
  grid-area: "content";
`

const ResumeHeader = styled.header`
  ${tw`flex flex-col relative items-center max-w-screen overflow-hidden`}
  ${tw`md:flex-row`}
`

const Portrait = styled.img`
  ${tw`w-24 md:w-32 bg-gray-200 inline-block select-none rounded-full md:float-left md:mr-6`}
`

const Caption = styled.span`
  ${tw`text-center flex flex-col items-center md:items-start`}
  p {
    ${tw`flex flex-row text-3xl items-center m-0 p-0 leading-none`};
    &:first-of-type {
      ${tw`text-2xl text-gray-600`}
    }
  }
`

const Love = () => {
  return (
    <FontAwesomeIcon
      className="inline-block mx-2 text-red-400 text-xl"
      icon={faHeart}
    />
  )
}

const PersonalLogo = styled.img`
  ${tw`inline-block w-16 md:w-24 pb-1 mx-1 md:mx-4`}
`

const Profile = styled.aside`
  /* ${tw`w-auto absolute top-0 right-0`} */
  ${tw`w-full`};
  /* TODO: responsive navbar */
  grid-area: sidebar;
  text-align: right;
  ul {
    ${tw`px-2 text-right flex flex-col items-end`};
  }
  ul li {
    &:first-of-type {
      ${tw`text-lg font-bold text-gray-800 mb-1 text-right`};
    }
    ${tw`flex flex-row items-center text-sm text-gray-700`};
    a {
      ${tw`hover:text-blue-800`}
    }
  }
`

const Columns = styled.div`
  ${tw`flex flex-col`}
  ${tw`md:flex-row`}
`

const Column = styled.div`
  ${tw`inline-block flex-auto mb-4`}
  ${tw``}
  & > h2 {
    ${tw`text-lg`}
    &:first-child {
      ${tw`mb-1`}
    }
  }
`

const ListStyle = styled.ul`
  /* display: grid; */
  /* grid-auto-flow: row dense; */
  /* grid-template-rows: repeat(1fr); */

  li {
    ${tw`leading-snug`}
  }
`

type ListEntry = { entry: string; heart?: boolean }

const List = ({ items }: { items: ListEntry }) => {
  return (
    <ListStyle>
      {items.map((item: ListEntry) => (
        <li>
          {item.entry}{" "}
          {item.heart ? (
            <FontAwesomeIcon icon={faHeart} className="text-sm text-red-300" />
          ) : (
            ""
          )}
        </li>
      ))}
    </ListStyle>
  )
}

const SectionStyle = styled.section`
  ${tw`flex flex-col md:flex-row my-8`}

  & > h1 {
    ${tw`flex-none mb-4 md:mb-0 mx-3 md:mx-0 leading-none text-left text-3xl w-full md:w-40 lg:w-64 lg:text-2xl md:text-right md:text-xl text-gray-600 lg:text-gray-500`}
  }
`

const SectionContent = styled.div`
  ${tw`flex-auto mx-4 lg:mx-8`}
  & > p {
    ${tw`mb-2 leading-tight`}
    &:first-child {
      ${tw`relative bottom-1`}
    }
  }
`

const Section = ({ children, title }: { children: any; title: string }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      <SectionContent>{children}</SectionContent>
    </SectionStyle>
  )
}

const IndexPage = () => {
  const {
    profile,
    bio,
    skills,
    tools,
    languages,
    libraries,
    technologies,
    education,
    experience,
    passions,
  } = resumeData

  const sortByStartDate = sortBy(prop("start"))
  const sortedExperience = sortByStartDate(experience.data)

  return (
    <Layout>
      <SEO title="CV / Resume" />
      <Container className="container">
        {/* <Profile>
          <PersonalLogo src={Logo} alt="Raimondo Butera personal logo" />
          <ul>
            <li>{profile.name}</li>
            <li>
              <FontAwesomeIcon
                className="text-gray-500 mr-2"
                icon={faEnvelope}
              />
              <Link to={`contact`}>{profile.email}</Link>
            </li>
            <li>
              <FontAwesomeIcon className="text-gray-500 mr-2" icon={faGlobe} />
              <a target="_blank" href={`https://${profile.homepage}`}>
                {profile.homepage}
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="text-green-300 mr-2" icon={faPhone} />

              <a target="_blank" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="text-gray-600 mr-2" icon={faGithub} />
              <a target="_blank" href={`https://github.com/${profile.github}`}>
                github.com/{profile.github}
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="text-gray-900 mr-2" icon={faMedium} />
              <a target="_blank" href={`https://medium.com/@${profile.medium}`}>
                medium.com/{profile.medium}
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                className="text-blue-300 mr-2"
                icon={faTwitter}
              />
              <a
                target="_blank"
                href={`https://twitter.com/${profile.twitter}`}
              >
                {profile.twitter}
              </a>
            </li>
          </ul>
        </Profile> */}

        <ResumeBody>
          <ResumeHeader>
            <Portrait
              src={profilePhoto}
              alt="a photo of Raimondo 'Rai' Butera"
            />

            <Caption>
              <p>Hi, I'm Rai,</p>
              <p>
                and I <Love /> innovation.
              </p>
            </Caption>
          </ResumeHeader>

          <Section title={bio.title}>
            {bio.data.map(line => (
              <p className="lg:text-lg">{line}</p>
            ))}
          </Section>

          <Section title={skills.title}>
            <Columns>
              {skills.data.map(skill => (
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
          <Section title={languages.title}>
            <List items={languages.data} />
          </Section>
          <Section title={libraries.title}>
            <List items={libraries.data} />
          </Section>
          <Section title={technologies.title}>
            <List items={technologies.data} />
          </Section>
          <Section title={tools.title}>
            <List items={tools.data} />
          </Section>
          <Section title={education.title}>
            <Columns>
              {education.data.map(educationLevel => (
                <Column>
                  <h2 className="text-xl">{educationLevel.heading}</h2>
                  {educationLevel.detail.map(line => (
                    <p className="leading-tight">{line}</p>
                  ))}
                </Column>
              ))}
            </Columns>
          </Section>

          <Section title={experience.title}>
            <Columns>
              {sortedExperience.map(item => (
                <Column>
                  <p className="text-sm uppercase leading-none tracking-wide font-bold text-gray-600">
                    {item.start} - {item.end}
                  </p>
                  <h2 className="mb-1 leading-none ">{item.company}</h2>
                  {item.roles.map(line => (
                    <p className="leading-none mb-1">{line}</p>
                  ))}
                </Column>
              ))}
            </Columns>
          </Section>
          <Section title={passions.title}>
            <List items={passions.data} />
          </Section>
        </ResumeBody>
      </Container>
    </Layout>
  )
}

export default IndexPage
