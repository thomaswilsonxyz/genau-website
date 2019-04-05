import React from "react"

import Layout from "../components/layout"
import SocialMediaPlatform from "../components/SocialMediaPlatform"
import CompanyMember from "../components/CompanyMember"
import SEO from "../components/seo"
import GenauHeaderImage from "../images/genau-header-image.png"
import HeroImage from "../components/HeroImage"
import { Instagram, Twitter, BookOpen } from "react-feather"

import members from "../data/members"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`genau`, `dance`, `company`]} />
    <HeroImage src={GenauHeaderImage} alt="header image" />
    <div className="strapline">
      <p className="strapline__text">
        We are a contemporary dance theatre company based in London, England. We
        are currently creating a trilogy about resilience
      </p>
      <div className="strapline__after" />
    </div>
    <section className="trilogy">
      <div className="trilogy__show" id="ebb-and-flood">
        <h2 className="trilogy__show__title">Ebb & Flood</h2>
        <p className="trilogy__show__date">2018</p>
      </div>
      <div className="trilogy__show" id="ebb-and-flood">
        <h2 className="trilogy__show__title">Kreislauf</h2>
        <p className="trilogy__show__date">2019</p>
      </div>
      <div className="trilogy__show" id="ebb-and-flood">
        <h2 className="trilogy__show__title">Hoffnung</h2>
        <p className="trilogy__show__date">2020</p>
      </div>
    </section>
    <section className="social-media">
      <h2 className="section-header">Stay in touch</h2>
      <div className="social-media__platforms">
        <SocialMediaPlatform
          name="Twitter"
          icon={<Twitter />}
          handle="@genaudanceco"
          url="https://www.twitter.com/genaudanceco"
        />
        <SocialMediaPlatform
          name="Instagram"
          icon={<Instagram />}
          handle="@genaudanceco"
          url="https://www.instagram.com/genaudanceco"
        />
        <SocialMediaPlatform
          name="Blog"
          icon={<BookOpen />}
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

export default IndexPage
