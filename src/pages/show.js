import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ShowPage = ({ name, strapLine }) => (
  <Layout>
    <SEO
      title="Kreislauf"
      keywords={["genau", "kreislauf", "dance", "london"]}
    />
    <h1>{name}</h1>
    <h2>{strapLine}</h2>
  </Layout>
)

ShowPage.propTypes = {
  name: PropTypes.string.isRequired,
  strapLine: PropTypes.string.isRequired,
}

export default ShowPage
