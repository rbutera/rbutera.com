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
import Img from "gatsby-image"
import Responsive from "../components/responsive"

const Resume = styled.article`
  ${tw`w-full flex flex-col px-4`}

  h2 {
    ${tw`text-gray-800 leading-none`}
  }

  ul li {
    ${tw`text-gray-800`};
  }
`
const Header = styled.header`
  ${tw`w-full flex flex-col items-center justify-between mt-1 mb-2`}
  ${tw`md:flex-row md:items-end`}
  ${tw`print:flex-row print:items-end`}
`

const Greeting = styled.section`
  ${tw`order-last flex flex-col relative items-center max-w-screen overflow-hidden w-full my-16`}
  ${tw`md:order-first md:flex-row md:mb-4 md:items-end md:my-0`}
  ${tw`print:order-first print:flex-row print:mb-4 print:items-end print:my-0`}
`

const Portrait = styled.aside`
  ${tw`w-24 bg-gray-200 inline-block select-none rounded-full overflow-hidden`}
  ${tw`md:w-32 md:float-left md:mx-3`}
  ${tw`lg:mx-4`}
  ${tw`print:float-left print:mx-4`}
`

const Caption = styled.span`
  ${tw`text-center flex flex-col items-center pt-4`}
  ${tw`md:items-start md:pb-4 md:pt-0`}
  ${tw`print:items-start print:pb-4 print:pt-0`}
  p {
    ${tw`flex flex-row text-3xl items-center m-0 p-0 leading-none`};
    &:first-of-type {
      ${tw`text-2xl text-gray-600`}
    }
  }
`

const PersonalLogo = styled.img`
  ${tw`w-12 mt-2`}
`

const ProfileStyle = styled.aside`
  /* ${tw`w-auto absolute top-0 right-0`} */
  ${tw`order-first flex flex-col items-end`};
  ${tw`md:order-last`};
  ${tw`print:order-last`};
  
  ul {
    ${tw`text-right flex flex-col items-end`};
  }
  ul li {
    &:first-of-type {
      ${tw`text-lg font-bold text-gray-800 text-right`};
    }
    ${tw`flex flex-row items-center text-sm text-gray-700`};
    a {
      ${tw`hover:text-blue-800`}
    }
  }
`

const Profile = ({ profile }) => (
  <ProfileStyle>
    <PersonalLogo src={Logo} alt="Raimondo Butera personal logo" />
    <ul>
      <li>{profile.name}</li>
      <li>
        <FontAwesomeIcon className="text-gray-500 mr-2" icon={faEnvelope} />
        <Link to={`contact`}>{profile.email}</Link>
      </li>
      <Responsive>
        {matches =>
          matches.print && (
            <>
              <li>
                <FontAwesomeIcon
                  className="text-gray-500 mr-2"
                  icon={faGlobe}
                />
                <a target="_blank" href={`https://${profile.homepage}`}>
                  {profile.homepage}
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-300 mr-2"
                  icon={faPhone}
                />

                <a target="_blank" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </li>
            </>
          )
        }
      </Responsive>
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
        <FontAwesomeIcon className="text-blue-300 mr-2" icon={faTwitter} />
        <a target="_blank" href={`https://twitter.com/${profile.twitter}`}>
          {profile.twitter}
        </a>
      </li>
    </ul>
  </ProfileStyle>
)

const Columns = styled.div`
  ${tw`flex flex-col`}
  ${tw`lg:flex-row`}
  grid-template-rows: auto;
  justify-content: space-between;
  grid-row-gap: 1em;
  grid-column-gap: 10%;
  grid-template-columns: repeat(
    ${({ columns = 3 }: { columns: Number }) => columns},
    auto
  );

  @media screen and (min-width: 1024px) {
    display: grid;
  }
`

const Column = styled.div`
  ${tw`inline-block flex-auto`}
  @media screen and (min-width: 1024px) {
    max-width: ${({ size = "full" }: { size: string }) =>
      size === "compact" ? "10rem" : "100%"};
  }
  ${tw`mb-6 md:mb-3 lg:mb-0`}
  ${tw`md:mb-3`}
  ${tw`lg:mb-0`}
  & > h2 {
    ${tw`text-xl`}
    &:first-child {
      ${tw`mb-1`}
    }
  }
`

const ListStyle = styled.ul`
  > li {
    ${tw`leading-snug`}
    @media screen and (min-width: 1024px) {
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
  items: ListEntry[]
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
  ${tw`flex flex-col mb-8`}
  ${tw`md:flex-row`}

  & > h1 {
    ${tw`flex-none mt-3 mb-6 mx-3 leading-none tracking-tight text-left text-4xl w-full text-gray-800`}
    ${tw`md:mt-0 md:mb-0 md:mx-0 md:w-40 md:text-right md:text-2xl`}
    ${tw`lg:text-2xl lg:text-gray-800`}
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

const IndexPage = ({ data }) => {
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

      <Resume>
        <Header>
          <Greeting>
            <Portrait>
              <Img
                alt="a photo of Raimondo 'Rai' Butera"
                fluid={data.portrait.childImageSharp.fluid}
              />
            </Portrait>

            <Caption>
              <p>Hi, I'm Rai,</p>
              <p>
                and I{" "}
                <FontAwesomeIcon
                  className="inline-block mx-2 text-red-400 text-xl"
                  icon={faHeart}
                />{" "}
                innovation.
              </p>
            </Caption>
          </Greeting>
          <Responsive>
            {matches => (
              <>
                {(matches.print || matches.lg || matches.xl) && (
                  <Profile profile={profile} />
                )}
              </>
            )}
          </Responsive>
        </Header>

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
                <Dates start={educationLevel.start} end={educationLevel.end} />
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
      </Resume>
    </Layout>
  )
}

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "rai.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
