import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";

// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-3xl sm:rounded-br-3xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-3xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6 text-gray-900`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;


const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-blue-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;


export default () => {
  
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  
  const cards = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeeojCgi0bKvqTIZcHsis-It_fpbOaxBnIkYnUHa2Ppmlwc-EhZPlsStP4RRQ54uU31g&usqp=CAU",
      title: "Survey Templates",
      description: "Surveys templates for customer satisfaction, Event surveys, HR surveys, Market research, employee engagment.",
     
    },
    {
      imageSrc: "https://www.freepik.com/free-vector/quiz-neon-sign_4553888.htm#page=1&query=quiz%20templates&position=2&from_view=search",
      title: "Quiz Templates",
      description: "Quiz templates for multiple choice quiz,spelling quiz, math quiz, vocabulary quiz, science quiz .",
     
    },
    {
      imageSrc: "https://www.freepik.com/free-vector/flat-giving-reviews-concept_14449319.htm#page=1&query=reviews%20templates&position=17&from_view=search",
      title: "Reviews Templates",
      description: "Review templates for online order reviews, remote working experience, product reviews, customer feedback.",
  
    },
    {
      imageSrc: "https://www.freepik.com/free-photo/english-teachers-doing-class-together_15678314.htm#page=1&query=online%20learning&position=9&from_view=search",
      title: "online learning Templates",
      description: "Templates for course evalution, students feedback, course feedback, online registration forms.",
 
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Templates</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                
                <Description>{card.description}</Description>
              </TextInfo>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
