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
import ReactMarkdown from "react-markdown"
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
  @media screen and (min-width: 768px) {
    grid-template-areas: "content sidebar";
    grid-template-columns: 1fr auto;
  }

  h2 {
    ${tw`text-gray-800 leading-none`}
  }

  ul li {
    ${tw`text-gray-800`};
  }
`

const ResumeBody = styled.div`
  grid-area: "content";
  ${tw`py-20`}
`

const ResumeHeader = styled.header`
  ${tw`flex flex-col relative items-center md:items-end max-w-screen overflow-hidden w-full md:mx-32 lg:mx-48`}
  ${tw`md:flex-row`}
`

const Portrait = styled.img`
  ${tw`w-24 md:w-32 bg-gray-200 inline-block select-none rounded-full md:float-left md:mr-3 lg:mr-4`}
`

const Caption = styled.span`
  ${tw`text-center flex flex-col items-center md:items-start md:pb-4 lg:pb-8 pt-4 md:pt-0`}
  p {
    ${tw`flex flex-row text-2xl items-center m-0 p-0 leading-none`};
    &:first-of-type {
      ${tw`text-xl text-gray-600`}
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
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(
      ${({ columns = 3 }: { columns: Number }) => columns},
      auto
    );
    grid-template-rows: auto;
    justify-content: space-between;

    grid-row-gap: 1em;
    grid-column-gap: 10%;
  }
`

const Column = styled.div`
  ${tw`inline-block flex-auto`}
  @media screen and (min-width: 768px) {
    max-width: ${({ size = "full" }: { size: string }) =>
      size === "compact" ? "10rem" : "100%"};
  }
  ${tw``}
  & > h2 {
    ${tw`text-xl`}
    &:first-child {
      ${tw`mb-1`}
    }
  }
`

const ListStyle = styled.ul`
  /* display: grid; */
  /* grid-auto-flow: row dense; */
  /* grid-template-rows: repeat(1fr); */

  /* display: ${({ horizontal }) => (horizontal ? "grid" : "block")} */
  
  grid-template-rows: auto;
  grid-template-columns: repeat(6, auto);
  width: 100%;

  > li {
    ${tw`leading-snug`}
    @media screen and (min-width: 768px) {
      ${({ horizontal }: { horizontal?: boolean }) => {
        return horizontal ? tw`inline-block mr-12 mb-1 text-gray-400` : ""
      }};
    }
  }
`

type ListEntry = { entry: string; heart?: boolean }

const List = ({
  items,
  horizontal,
}: {
  items: ListEntry
  horizontal?: boolean
}) => {
  return (
    <ListStyle horizontal={horizontal}>
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
    ${tw`flex-none mt-3 md:mt-0 mb-6 md:mb-0 mx-3 md:mx-0 leading-none tracking-tight text-left text-2xl w-full md:w-40 lg:w-64 lg:text-2xl md:text-right md:text-xl text-gray-800 lg:text-gray-800`}
  }
`

const SectionContent = styled.div`
  ${tw`flex-auto mx-4`}
  & > p {
    ${tw`mb-2 leading-tight`}
    &:first-child {
      ${tw`relative bottom-1`}
    }
  }
`

const Dates = ({ start, end }) => {
  return (
    <p className="text-sm uppercase leading-none tracking-wide font-bold text-gray-600">
      {start} - {end}
    </p>
  )
}

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
    tools,
    skills,
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
              <p>
                <ReactMarkdown className="lg:text-lg">{line}</ReactMarkdown>
              </p>
            ))}
          </Section>

          <Section title={skills.title}>
            <Columns>
              {skills.data.map(skill => (
                <Column>
                  <h2>{skill.category}</h2>
                  <ul className="leading-snug">
                    {skill.related.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </Column>
              ))}
            </Columns>
          </Section>
          <Section title="Expertise">
            <Columns>
              {[languages, libraries, technologies].map(({ title, data }) => {
                return (
                  <Column>
                    <h2>{title}</h2>
                    <List items={data} />
                  </Column>
                )
              })}
            </Columns>
          </Section>
          <Section title={tools.title}>
            <List horizontal items={tools.data} />
          </Section>
          <Section title={education.title}>
            <Columns columns={4}>
              {education.data.map(educationLevel => (
                <Column size="compact">
                  <Dates
                    start={educationLevel.start}
                    end={educationLevel.end}
                  />
                  <h2 className="text-xl leading-none">
                    {educationLevel.heading}
                  </h2>
                  {educationLevel.detail.map(line => (
                    <p className="leading-tight text-gray-800">{line}</p>
                  ))}
                </Column>
              ))}
            </Columns>
          </Section>

          <Section title={experience.title}>
            <Columns>
              {sortedExperience.map(item => (
                <Column size="compact">
                  <Dates start={item.start} end={item.end} />
                  <h2 className="mb-1 leading-none ">{item.company}</h2>
                  {item.roles.map(line => (
                    <p className="leading-none mb-1 text-gray-800">{line}</p>
                  ))}
                </Column>
              ))}
            </Columns>
          </Section>
          <Section title={passions.title}>
            <List horizontal items={passions.data} />
          </Section>
        </ResumeBody>
      </Container>
    </Layout>
  )
}

export default IndexPage
