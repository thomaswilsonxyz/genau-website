import React from "react"

import Layout from "../components/layout"
import SocialMediaPlatform from "../components/SocialMediaPlatform"
import CompanyMember from "../components/CompanyMember"
import SEO from "../components/seo"
import GenauHeaderImage from "../images/genau-header-image.png"
import HeroImage from "../components/HeroImage"
import TrilogyTile from "../components/TrilogyTile"
import { Instagram, Twitter, BookOpen } from "react-feather"
import { graphql } from "gatsby"

import members from "../data/members"

import "./index.scss"

const iconSize = 40

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`genau`, `dance`, `company`]} />
    {JSON.stringify}
    <HeroImage src={GenauHeaderImage} alt="header image" />
    <div className="strapline">
      <p className="strapline__text">
        We are a contemporary dance theatre company based in London, England. We
        are currently creating a trilogy about resilience
      </p>
      <div className="strapline__after" />
    </div>
    <section className="trilogy">
      <TrilogyTile
        name="Ebb & Flood"
        date="2017"
        imageUrl={data.ebbImage.edges[0].node.publicURL}
        showUrl="/show/ebb-and-flood"
      />
      <TrilogyTile
        name="Kreislauf"
        date="2019"
        imageUrl={data.kreislaufImage.edges[0].node.publicURL}
        showUrl="/show/kreislauf"
      />
      <TrilogyTile
        name="Hoffnung"
        date="2020"
        imageUrl={data}
        showUrl="/show/hoffnung"
      />
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
      <h2 className="section-header">Meet the company</h2>
      <div className="company-members">
        {members.map(({ name, role, imageUrl }) => (
          <CompanyMember
            key={name}
            name={name}
            role={role}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </section>
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
