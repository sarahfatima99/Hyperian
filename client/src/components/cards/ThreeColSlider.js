import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings";
import defaultCardImage from "../../images/shield-icon.svg";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-green-700 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-green-600 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-green-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;



export default () => {
 

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Market Research Template",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
    },
    { imageSrc: SupportIconImage, title: "Research survey" },
    { imageSrc: CustomizeIconImage, title: "Quiz Templates" },
    { imageSrc: ShieldIconImage, title: "Recommandation Templates" },
    { imageSrc: SupportIconImage, title: "Reviews Templates" },
    { imageSrc: CustomizeIconImage, title: "Registration Template" }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Offered <span tw="text-green-500">Templates</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description" style={{width:"100%",textAlign:"center",marginLeft:"0%"}}>
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      
    </Container>
  );
};
