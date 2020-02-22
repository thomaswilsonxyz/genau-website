import React, { useState } from "react"
import Particles from "react-particles-js"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import styled from "styled-components"

const lightColour = "#96777c"
const darkColour = "#260c1a"

const HoffnungPage = () => {
  const [clickedBuyButton, setClickedBuyButton] = useState(false)
  const handleOnBuyClick = () => {
    setClickedBuyButton(true)
  }
  return (
    <Layout>
      <Helmet>
        <meta name="keywords" content="genau dance co,hoffnung" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Hoffnung is genau dance co's final piece in their trilogy on resilience. It is being performed 22-23 May 2020 in the Cockpit Theatre, London"
        />
        <title>Hoffnung - genau dance co.</title>
        <link rel="canonical" href="https://genaudance.co/hoffnung" />
      </Helmet>
      <Wrapper>
        <Particles
          style={{ position: "absolute", pointerEvents: "none" }}
          params={{
            particles: {
              color: {
                value: "260c1a",
              },
              opacity: {
                anim: false,
              },
              number: {
                value: 120,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: false,
                speed: 0.33,
                direction: "right",
                out_mode: "out",
              },
            },
          }}
        />
        <Segment align="end" color={lightColour}>
          <Title>Hoff</Title>
          <SegmentText align="flex-end">
            <PerformanceBio>
              <p>
                genau dance company presents the final piece in their three-year
                trilogy on resilience: Hoffnung, or hope. For genau, Hoffnung is
                intended as a positive expression in the face of intolerance and
                indifference.
              </p>
              <p>
                Hope is a  state of mind; it is neither explicable nor
                reasonable, but is a triumph over despair.
              </p>
            </PerformanceBio>
          </SegmentText>
        </Segment>

        <Segment color={darkColour} align="start">
          <Title>nung</Title>
          <SegmentText align="start">
            <PerformanceDetails>
              May 23-24 2020
              <br />
              The Cockpit Theatre, London
              <BuyLink
                href="https://www.thecockpit.org.uk/show/hoffnung"
                clicked={clickedBuyButton}
                onClick={handleOnBuyClick}
              >
                Buy Tickets
              </BuyLink>
            </PerformanceDetails>
          </SegmentText>
        </Segment>
      </Wrapper>
    </Layout>
  )
}

const smallBreakpoint = "450px"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 10px;
  min-height: 100vh;
  background: black;
`

const Segment = styled.div`
  min-height: 50vh;
  background: ${props => props.color};
  display: grid;
  grid-template-columns: 75px 1fr;
  padding: 0 50px;
  justify-content: bottom;
  align-items: ${props => props.align};

  @media screen and (max-width: ${smallBreakpoint}) {
    padding: 0 10px;
  }
`

const SegmentText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 7.5%;
  max-width: 65ch;

  @media screen and (max-width: ${smallBreakpoint}) {
    padding: 20px 0 0px 15px;
    max-width: 100%;
    align-items: ${props => props.align};
    justify-content: ${props => props.align};
  }
`

const Title = styled.h1`
  z-index: 5;
  color: white;
  writing-mode: horizontal-tb;
  text-align: center;
  letter-spacing: 0px;
  text-transform: uppercase;
  font-size: 85px;
  height: max-content;
  margin: 0;

  @media screen and (max-width: ${smallBreakpoint}) {
    font-size: 75px;
  }
`

const PerformanceBio = styled.p`
  color: white;
  font-size: 24px;
  font-family: "nunito";
  line-height: 150%;

  @media screen and (max-width: ${smallBreakpoint}) {
    font-size: 20px;
    line-height: 120%;
  }
`
const PerformanceDetails = styled.p`
  display: flex;
  flex-flow: column;
  color: white;
  font-size: 30px;
  line-height: 140%;
`

const BuyLink = styled.a`
  @keyframes shadow-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
  }
  z-index: 1;
  background: white;
  color: ${darkColour};
  font-size: 25px;
  border-radius: 20px;
  border: none;
  width: fit-content;
  margin-top: 15px;
  padding: 0 20px;
  text-decoration: none;
  transition: transform 0.05s ease-in;
  animation: ${props => (props.clicked ? `shadow-pulse 0.55s ease-in` : ``)}

  &:hover {
    background: #ffeaf5;
    transform: scale(1.02);
  }

  &:active {
    background: #c1aeb8;
    transform: scale(0.98);
    animation: shadow-pulse 0.85s ease-out;
  }
`

HoffnungPage.propTypes = {}

export default HoffnungPage
