import React,{useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Typical from 'react-typical';
import FormModal from "../FormFields/FormModal";
import AccountBox from "../accountbox";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { render } from "@testing-library/react";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-green-600 hover:border-gray-700 hover:text-green-800`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-400 hover:text-blue-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("data:image/jpeg;base64,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");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-purple-100 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 font-mono leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-800 border-l-4 border-green-700 font-mono font-medium text-base`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-green-500 text-gray-800 font-bold rounded shadow transition duration-300 hocus:bg-green-400 hocus:text-gray-800 `;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;
function displaylogin(){
  return
    <AccountBox/>
  
}
export default () => {
  const [showModal,setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(prev => !prev)
  }
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        Home
      </NavLink>
      <NavLink href="#">
        ContactUs
      </NavLink>
      <NavLink href="#">
        Templates
      </NavLink>
      <NavLink to="/signup">
        AboutUs
      </NavLink>
    </NavLinks>,
    <NavLinks>    
      <NavLink  >
      <PrimaryLink href="/login">
         Login
      </PrimaryLink>
    </NavLink>  
    </NavLinks>

  ];

  return (
    <Container>
      <FormModal showModal={showModal} setShowModal={setShowModal}/>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        
        <TwoColumn>
          <LeftColumn>
            <Notification>Make your audience happy</Notification>
            <Heading>
            <span className="animated1">{' '}
                       <Typical className={'text1'} loop={Infinity} wrapper="span" steps={['Enable people enjoy the answering',3000,'Keeps them engaged and focused ',3000,'Change your style of questioning',3000,'Enjoy the thoughtful answering',3000]} />
                   </span>
             
              <br />
             
            </Heading>
            <PrimaryAction>Get Started</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};