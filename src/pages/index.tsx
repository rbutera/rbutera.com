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
  ${tw`w-full flex flex-col px-2 text-gray-800`}
  ${tw`sm:px-4 text-lg`}
  ${tw`md:p-8`}
  ${tw`lg:p-12`}
  ${tw`xl:py-16 xl:px-32`}
  ${tw`print:px-5`}

  h2, h3 {
    ${tw`text-gray-700 leading-none`}
  }


  ul li {
    ${tw`text-gray-800`};
    ${tw`text-base leading-none`};
    ${tw`md:text-sm leading-snug`};
    ${tw`print:text-xs print:leading-none`};
    ${tw``}
  }
`
const Header = styled.header`
  ${tw`w-full flex flex-col items-center justify-between mt-1 mb-2`}
  ${tw`md:flex-row md:items-end md:mb-6`}
  ${tw`lg:mb-8`}
  ${tw`print:flex-row print:items-end print:mb-8`}
`

const Greeting = styled.section`
  ${tw`order-last flex flex-col relative items-center max-w-screen overflow-hidden w-full my-16`}
  ${tw`md:order-first md:flex-row md:mb-4 md:items-end md:my-0`}
  ${tw`print:order-first print:flex-row print:mb-4 print:items-end print:my-0`}
`

const Portrait = styled.aside`
  ${tw`w-24 bg-gray-200 inline-block select-none rounded-full overflow-hidden`}
  ${tw`md:w-20 md:float-left md:mx-3`}
  ${tw`lg:w-32 lg:mx-4`}
  ${tw`print:w-16 print:float-left print:mx-2`}
`

const Caption = styled.span`
  ${tw`text-center flex flex-col items-center pt-4`}
  ${tw`md:items-start md:pb-4 md:pt-0`}
  ${tw`lg:pb-4`}
  ${tw`print:items-start print:pb-1 print:pt-0`}
  p {
    ${tw`flex flex-row text-3xl items-center m-0 p-0 leading-none`};
    ${tw`md:text-lg`};
    ${tw`lg:text-3xl`};
    ${tw`print:text-base`}
    &:first-of-type {
      ${tw`text-2xl text-gray-600 font-medium`}
      ${tw`md:text-base`};
      ${tw`lg:text-2xl`};
      ${tw`print:text-sm`}
    }
  }
`

const PersonalLogo = styled.img`
  ${tw`w-12 mt-2`}
  ${tw`print:w-8 print:mb-2 print:mt-0`}
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
      ${tw`text-lg font-bold text-gray-800 text-right mb-2`};
      ${tw`md:mb-2`};
      ${tw`print:text-md`};
    }
    ${tw`flex flex-row items-center text-sm text-gray-700 leading-none`};
    ${tw`print:text-xs`};
    a {
      ${tw`hover:text-blue-800`}
    }
  }
`

const Columns = styled.div`
  ${tw`flex flex-col m-0 p-0 leading-none`}
  ${tw`lg:flex-row`}
  grid-template-rows: auto;
  justify-content: space-between;
  grid-row-gap: 1rem;
  grid-column-gap: 10%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, auto);
    display: grid;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(
      ${({ columns = 3 }: { columns: Number }) => columns},
      auto
    );
    display: grid;
  }

  @media print {
    display: grid;
    grid-template-columns: repeat(
      ${({ columns = 3 }: { columns: Number }) => columns},
      auto
    );
  }
`

const Column = styled.div`
  ${tw`inline-block flex-auto`}
  @media screen and (min-width: 1024px) {
    max-width: ${({ size = "full" }: { size: string }) =>
      size === "compact" ? "10rem" : "100%"};
  }
  @media print {
    max-width: ${({ size = "full" }: { size: string }) =>
      size === "compact" ? "10rem" : "100%"};
  }
  ${tw`mb-6`}
  ${tw`md:mb-3`}
  ${tw`lg:mb-0`}
  ${tw`print:mb-0`}
  & > h2 {
    ${tw`text-lg leading-normal`}
    ${tw`md:text-base md:leading-none`}
    ${tw`print:text-sm print:leading-none`}
    &:first-child {
      ${tw`mb-1`}
    }
  }

    & > h3 {
    ${tw`text-base mb-1`}
    ${tw`print:text-xs print:leading-none print:mb-0`}
    &:first-child {
      ${tw`mb-1`}
    }
  }

  p, li {
    ${tw`text-sm`}
    ${tw`print:text-xs print:leading-none`}
  }
`

const SectionStyle = styled.section`
  ${tw`flex flex-col mb-8`}
  ${tw`md:flex-row`}
  ${tw`print:flex-row mb-4`}

  & > h1 {
    ${tw`flex-none mt-3 mb-6 mx-3 leading-none tracking-tight text-left text-3xl w-full text-gray-800`}
    ${tw`md:mt-0 md:mb-0 md:mx-0 md:w-24 md:text-right md:text-xl md:text-gray-500`}
    ${tw`lg:w-40 lg:text-2xl`}
    ${tw`print:mt-0 print:mb-0 print:mx-0 print:w-16 print:text-right print:text-xs print:uppercase print:tracking-wide`}
  }
`

const SectionContent = styled.div`
  ${tw`flex-auto px-4`}

  & > p {
    ${tw`text-base mb-4 leading-tight`}
    ${tw`md:mb-2`}
    ${tw`print:text-sm print:mb-1`}
    &:first-child {
      ${tw`relative bottom-1`}
    }
  }
`

const ListStyle = styled.ul`
  ${tw`leading-none`}
  > li {
    ${tw`leading-snug`}
    @media screen and (min-width: 768px) {
      ${({ horizontal }: { horizontal?: boolean }) => {
        return horizontal ? tw`inline-block mr-12 mb-1 text-gray-400` : ""
      }};
    }
    @media print {
      ${({ horizontal }: { horizontal?: boolean }) => {
        return horizontal ? tw`inline-block mr-12 mb-0 text-gray-400` : ""
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
            <FontAwesomeIcon icon={faHeart} className="text-sm text-red-200" />
          ) : (
            ""
          )}
        </li>
      ))}
    </ListStyle>
  )
}

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
      <Responsive>
        {matches =>
          matches &&
          !matches.print && (
            <>
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
              <li>
                <FontAwesomeIcon
                  className="text-gray-900 mr-2"
                  icon={faMedium}
                />
                <a
                  target="_blank"
                  href={`https://medium.com/@${profile.medium}`}
                >
                  medium.com/{profile.medium}
                </a>
              </li>
            </>
          )
        }
      </Responsive>
    </ul>
  </ProfileStyle>
)

const Dates = ({ start, end }) => {
  return (
    <span className="text-sm uppercase leading-none tracking-wide font-bold text-gray-500 print:text-xs">
      {start} - {end}
    </span>
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
                  className="inline-block mx-1 text-red-200 text-xl"
                  icon={faHeart}
                />{" "}
                innovation.
              </p>
            </Caption>
          </Greeting>
          <Responsive>
            {matches => (
              <>
                {(matches.print || matches.lg || matches.xl || matches.md) && (
                  <Profile profile={profile} />
                )}
              </>
            )}
          </Responsive>
        </Header>

        <Section title={bio.title}>
          {bio.data.map(line => (
            <p>
              <ReactMarkdown className="print:text-xs">{line}</ReactMarkdown>
            </p>
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
                <h3>{educationLevel.heading}</h3>
                {educationLevel.detail.map(line => (
                  <p className="text-gray-800">{line}</p>
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
                <h3 className="mb-1">{item.company}</h3>
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
