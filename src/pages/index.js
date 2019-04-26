import React from "react"

import Layout from "../components/layout"
import SocialMediaPlatform from "../components/SocialMediaPlatform"
import { CompanyMembers, SEO } from "../components"
import GenauHeaderImage from "../images/genau-header-image.png"
import HeroImage from "../components/HeroImage"
import TrilogyTile from "../components/TrilogyTile"
import { Instagram, Twitter, BookOpen } from "react-feather"
import { graphql } from "gatsby"

import "./index.scss"

const iconSize = 40

const IndexPage = ({ data }) => (
  <Layout>
    <React.Fragment>
      <SEO title="Home" keywords={[`genau`, `dance`, `company`]} />
      {JSON.stringify}
      <HeroImage src={GenauHeaderImage} alt="header image" />
      <div className="strapline">
        <p className="strapline__text">
          We are a contemporary dance theatre company based in London, England.
          We are currently creating a trilogy about resilience
        </p>
        <div className="strapline__after" />
      </div>
      <section className="trilogy">
        <TrilogyTile
          name="Ebb & Flood"
          date="2017"
          imageUrl={data.ebbImage.edges[0].node.publicURL}
          linkUrl={"/shows/ebb"}
        />
        <TrilogyTile
          name="Kreislauf"
          date="2019"
          imageUrl={data.kreislaufImage.edges[0].node.publicURL}
          linkUrl="/shows/kreislauf"
        />
        {/* <TrilogyTile name="Hoffnung" date="2020" imageUrl={data} /> */}
      </section>
      <section className="social-media">
        <h2 className="section-header">Stay in touch</h2>

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
        <h2 className="section-header">Meet the Performers</h2>

        <div className="headshots-wrapper">
          <CompanyMembers />
        </div>
      </section>
    </React.Fragment>
  </Layout>
)

export const ebbImage = graphql`
  {
    ebbImage: allFile(
      filter: { relativeDirectory: { eq: "trilogy" }, name: { eq: "ebb" } }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
    kreislaufImage: allFile(
      filter: {
        relativeDirectory: { eq: "trilogy" }
        name: { eq: "kreislauf" }
      }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

export default IndexPage
