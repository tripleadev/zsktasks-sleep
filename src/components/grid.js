import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  column-count: ${({ columnCount }) => columnCount};
  column-gap: 15px;
`

const StyledImage = styled(Img)`
  display: inline-block;
  width: 100%;
  margin: 0 0 15px 0;
`

const Grid = () => {
  const [columns, setColumns] = useState(0)

  useEffect(() => {
    const func = () => {
      setColumns(Math.floor((window.innerWidth - 100) / 300))
    }

    window.addEventListener("resize", func)

    return () => {
      window.removeEventListener("resize", func)
    }
  })

  useEffect(() => {
    setColumns(Math.floor((window.innerWidth - 100) / 300))
  }, [])

  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query gridImages {
      allFile {
        edges {
          node {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper columnCount={columns}>
      {edges.map(({ node }) => (
        <StyledImage fluid={node.childImageSharp.fluid} />
      ))}
    </Wrapper>
  )
}

export default Grid
