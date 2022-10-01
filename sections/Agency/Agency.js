import Image from "next/image";

import {
  StyledContainer,
  StyledTextContainer,
  StyledImageContainer,
  StyledCardsContainer,
  StyledTitle,
  StyledDescription,
  StyledCard,
} from "./elements";

export const Agency = ({ title, description, videoImage, cards, ...props }) => {
  return (
    <>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <StyledImageContainer
          width={videoImage.width}
          height={videoImage.height}
        >
          <Image
            src={videoImage.src}
            alt={videoImage.alt}
            layout="fill"
            objectFit="contain"
          />
        </StyledImageContainer>
        <StyledCardsContainer>
          {cards.map((card) => (
            <StyledCard key={card.title} {...card} />
          ))}
        </StyledCardsContainer>
      </StyledContainer>
    </>
  );
};
