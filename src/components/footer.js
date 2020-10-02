import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  text-align: center;
  padding: 3px 0;

  a {
    color: white;
  }
`

const Footer = () => (
  <Wrapper>
    Made by <a href="https://siekierski.ml">Adam Siekierski</a>
  </Wrapper>
)

export default Footer
