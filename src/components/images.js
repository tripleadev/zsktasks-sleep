import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  img {
    max-height: 90%;
    max-width: 90%;
  }

  h1 {
    margin: 0 0 30px 0;
  }
`

const Images = () => {
  const [img, setImg] = useState(0)

  const {
    allFile: { edges: allImages },
  } = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const {
    node: { publicURL },
  } = allImages[img]

  const onImgLoad = () => {
    setTimeout(() => {
      setImg(prevI => {
        return allImages.length - 1 > prevI ? prevI + 1 : 0
      })
    }, 4000)
  }

  return (
    <Wrapper>
      <h1>nie moge mam spanko</h1>
      <img
        alt="spanko"
        src={publicURL}
        onLoad={onImgLoad}
        onError={onImgLoad}
      />
      <div />
    </Wrapper>
  )
}

export default Images
