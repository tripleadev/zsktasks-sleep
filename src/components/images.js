import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

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
    opacity: 0;
  }

  h1 {
    margin: 0 0 30px 0;
  }
`

const Images = () => {
  const [img, setImg] = useState(0)
  const [visible, setVisible] = useState(1)

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

  const onImageLoad = () => {
    setVisible(1)

    setTimeout(() => {
      setVisible(0)

      setTimeout(() => {
        setImg(prevI => {
          return allImages.length - 1 > prevI ? prevI + 1 : 0
        })
      }, 2000)
    }, 6000)
  }

  return (
    <Wrapper>
      <h1>spanko...</h1>
      <motion.img
        alt="spanko-image"
        src={publicURL}
        onLoad={onImageLoad}
        animate={{ opacity: visible }}
        transition={{ duration: 2 }}
      />
      <div />
    </Wrapper>
  )
}

export default Images
