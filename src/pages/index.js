import React from 'react'
import Link from 'gatsby-link'
import cover from "../images/astro2.svg"
import { graphql } from "gatsby"

const IndexPage = ({ pageContext, data }) => {
  const { edges } = data.allMarkdownRemark

  return (
<div>

  <div className="jumbotron">
    <div className="jumbotron-inner container">
      <h1 className="display-3">Lyle Franklin</h1>
      <p>Staff software engineer @ Pivotal Cloud Foundry</p>
      <img src={cover} alt="astronaut" />
    </div>
  </div>

  <div className="container">
    <h3>Projects</h3>
      <div className="row">
        {edges.map((item) => {
          const { date, path, title, summary } = item.node.frontmatter

          return (
            <div key={path} className="col-md-4">
              <div className="margin-bottom-3">
                <Link className="title-link" to={path}>{title}</Link>
                <p className="date">{date}</p>
                <p>{summary}</p>
              </div>
            </div>
          )
        })}
      </div>

  </div>
</div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["blog"] } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            summary
          }
        }
      }
    }
  }
`
