import React from "react"
import { Box, Text, Button } from "rebass"
import { css } from "@emotion/core"
import { heroImg, brandmark } from "../images"
import Container from "./container"

const heroStyle = css`
    position: relative;
    left: 50%;
    right: 50%;
    background: url("${heroImg}") no-repeat center;
    width: 100vw;
    height: 50rem;
    margin-left: -50vw;
    margin-right: -50vw;
`

const generate3dShadow = (size, color) => {
  let result = []
  for (let i = size; i > 0; i -= 1) {
    result = [...result, `${i}px ${i}px ${color}`]
  }
  return result.join()
}

const Hero = () => (
  <Box css={heroStyle}>
    <Box
      css={theme => ({
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: theme.colors.darkBlue,
        width: "inherit",
        height: "inherit",
        lineHeight: 0.95,
        opacity: 0.85,
        "-webkit-clip-path": `url("${brandmark}")`,
      })}
    >
      <Container>
        <Box opacity="1" marginTop={4}>
          <Text fontSize={6} color="gold" fontWeight="body">
            ★★★ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
          </Text>
          <Text fontSize={7} fontWeight="hero" color="white">
            WE ARE
          </Text>
          <Text fontSize={6} fontWeight="hero" color="lightBlue">
            REACTJS
          </Text>
          <Text fontSize={6} fontWeight="hero" color="gold">
            PHILIPPINES
          </Text>
          <Button
            css={theme => ({
              marginTop: theme.space[2],
              padding: theme.space[1],
              backgroundColor: theme.colors.darkBlue,
              color: theme.colors.white,
              opacity: 1,
              border: `5px solid ${theme.colors.white}`,
              boxShadow: generate3dShadow(5, theme.colors.white),
              borderRadius: 0,
              fontWeight: theme.fontWeights.thin,
              outline: 0,
            })}
          >
            JOIN THE COMMUNITY
          </Button>
        </Box>
      </Container>
    </Box>
  </Box>
)

export default Hero
