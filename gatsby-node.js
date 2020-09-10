const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: path.resolve("./src/components/UI/Templates/BlogPost.js"),
        // component: path.resolve("./src/pages/blog.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
