import React from "react"
import { Instagram, Twitter, BookOpen } from "react-feather"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SocialMediaPlatform from "../components/SocialMediaPlatform"
import { CompanyMembers, SEO } from "../components"
import TrilogyTile from "../components/TrilogyTile"
import { graphql } from "gatsby"
import { collaborators, dancers } from "../data/members"

import "./index.scss"

const iconSize = 40

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <React.Fragment>
        <SEO title="Home" keywords={[`genau`, `dance`, `company`]} />
        {JSON.stringify}
        <Img
          alt="the genau dancers"
          className="home-page-header"
          style={{
            height: 200,
          }}
          imgStyle={{
            width: "100%",
            height: 300,
            marginBottom: 0,
            paddingBottom: 0,
            backgroundSize: "cover",
            objectPosition: undefined,
          }}
          fluid={data.headerImage.edges[0].node.childImageSharp.fluid}
        />
        <div className="strapline">
          <p className="strapline__text">
            We are a contemporary dance theatre company based in London,
            England. We are currently creating a trilogy about resilience
          </p>
          <div className="strapline__after" />
        </div>
        <section className="trilogy">
          <TrilogyTile
            name="Ebb & Flood"
            date="2017"
            imageFluid={data.ebbImage.edges[0].node.childImageSharp.fluid}
            linkUrl={"/shows/ebb"}
          />
          <TrilogyTile
            name="Kreislauf"
            date="2019"
            imageFluid={data.kreislaufImage.edges[0].node.childImageSharp.fluid}
            linkUrl="/shows/kreislauf"
          />
          <TrilogyTile
            name="Hoffnung"
            date="2020"
            imageFluid={data.hoffnungImage.edges[0].node.childImageSharp.fluid}
            linkUrl="/shows/hoffnung"
          />
        </section>
        <section className="social-media">
          <div className="section-header">
            <div className="section-header__wrapper">
              <h2 className="section-header__wrapper__text">Stay in Touch</h2>
              <div className="section-header__wrapper__background" />
            </div>
          </div>

          <div className="social-media__platforms">
            <SocialMediaPlatform
              name="Twitter"
              icon={<Twitter size={iconSize} />}
              handle="@genaudanceco"
              url="https://www.twitter.com/genaudanceco"
            />
            <SocialMediaPlatform
              name="Instagram"
              icon={<Instagram size={iconSize} />}
              handle="@genaudanceco"
              url="https://www.instagram.com/genaudanceco"
            />
            <SocialMediaPlatform
              name="Blog"
              icon={<BookOpen size={iconSize} />}
              handle="Visit Blog"
              url="/blog"
            />
          </div>
        </section>
        <section>
          <div className="section-header">
            <div className="section-header__wrapper">
              <h2 className="section-header__wrapper__text">Our Performers</h2>
              <div className="section-header__wrapper__background" />
            </div>
          </div>

          <div className="headshots-wrapper">
            <CompanyMembers members={dancers} headshots={data.headshots} />
          </div>
        </section>

        <section>
          <div className="section-header">
            <div className="section-header__wrapper">
              <h2 className="section-header__wrapper__text">
                Our Collaborators
              </h2>
              <div className="section-header__wrapper__background" />
            </div>
          </div>

          <div className="headshots-wrapper">
            <CompanyMembers
              members={collaborators}
              headshots={data.headshots}
            />
          </div>
        </section>
      </React.Fragment>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query {
    headerImage: allFile(filter: { name: { eq: "genau-header-image" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    ebbImage: allFile(
      filter: { sourceInstanceName: { eq: "trilogy" }, name: { eq: "ebb" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    kreislaufImage: allFile(
      filter: {
        sourceInstanceName: { eq: "trilogy" }
        name: { eq: "kreislauf" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    hoffnungImage: allFile(
      filter: {
        sourceInstanceName: { eq: "trilogy" }
        name: { eq: "hoffnung" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    headshots: allFile(filter: { sourceInstanceName: { eq: "headshots" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 150, width: 150, grayscale: true) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
