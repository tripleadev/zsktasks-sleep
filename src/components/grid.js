import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import chunk from "lodash.chunk"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`

const Column = styled.div`
  flex: 1;
  padding: 8px;
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

  const numOfImages = Math.floor(edges.length / columns)
  const chunks = chunk(edges, numOfImages)

  return (
    <Wrapper>
      {chunks.map((chunk, i) => (
        <Column key={`column_${i}`}>
          {chunk.map(({ node }, imgI) => (
            <a href={node.publicURL} key={`column_${1}_image_${imgI}`}>
              <Img
                fluid={node.childImageSharp.fluid}
                style={{ marginBottom: "16px" }}
              />
            </a>
          ))}
        </Column>
      ))}
    </Wrapper>
  )
}

export default Grid
