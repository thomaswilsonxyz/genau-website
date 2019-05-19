const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    `${__dirname}/src/components/blog/BlogPostTemplateWithPageContext.jsx`
  )
  return graphql(`
    {
      defaultImage: allFile(
        filter: {
          sourceInstanceName: { eq: "blogPostHeaderImages" }
          name: { eq: "genau-logo" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 150, height: 150) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
      images: allFile(
        filter: { sourceInstanceName: { eq: "blogPostHeaderImages" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 150, height: 150) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
      blogPosts: allFile(
        filter: {
          sourceInstanceName: { eq: "blogPosts" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              excerpt(truncate: true, pruneLength: 140)
              html
              frontmatter {
                title
                date
                author
                slug
              }
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      throw results.erros
    }

    const defaultImageFixed =
      results.data.defaultImage.edges[0].node.childImageSharp.fixed
    results.data.blogPosts.edges.forEach(edge => {
      let postImageFixed = results.data.images.edges
        .filter(imageEdge => imageEdge.node.name === edge.node.name)
        .map(imageEdge => imageEdge.node.childImageSharp.fixed)

      if (postImageFixed.length === 0) {
        postImageFixed = defaultImageFixed
      } else {
        postImageFixed = postImageFixed[0]
      }

      createPage({
        path: `blog/${edge.node.childMarkdownRemark.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          postImageFixed,
          postRemark: edge.node.childMarkdownRemark,
        },
      })
    })
  })
}
