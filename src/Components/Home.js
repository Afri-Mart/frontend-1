import React from "react";
import styled from "styled-components";
import {
  Heading,
  Herocont,
  Herosub,
  Herotextcont,
  Herotitle,
  Herovideo,
  Herovideocont,
  Herovidoverlay,
} from "./StyledComponents";
import Heromp4 from "../Assets/Hero.mp4";
const WelcomeDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Image = styled.img`
  max-width: 90%;
`;
export default function Welcome() {
  return (
    <WelcomeDiv>
      <Herocont>
        <Herovideocont>
          <Herovideo muted loop autoPlay playsInline>
            <source src={Heromp4} />
          </Herovideo>
          <Herovidoverlay />
        </Herovideocont>
        <Herotextcont>
          <Herotitle> Welcome</Herotitle>
          <Herosub>Let's Grow Your Garden</Herosub>
        </Herotextcont>
      </Herocont>

      {/*<Image src={image} />*/}
    </WelcomeDiv>
  );
}
