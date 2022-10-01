// The Card to be exported goes here

import Image from "next/image";

import {
  StyledContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";

export const Card = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledImageContainer width={image.width} height={image.height}>
        <Image src={image.src} alt={image.alt} width="100%" height="100%" />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};
