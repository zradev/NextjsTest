import Image from "next/image";

import {
  StyledContainer,
  StyledTextContainer,
  StyledImageContainer,
  StyledCardsContainer,
  StyledTextPopup,
  StyledTitle,
  StyledDescription,
  StyledCard,
} from "./elements";

export const AgencySelection = ({
  title,
  description,
  videoImage,
  cards,
  popupText,
  ...props
}) => {
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
          {popupText != "" && <StyledTextPopup>{popupText}</StyledTextPopup>}
          {cards.map((card) => (
            <StyledCard key={card.title} {...card} />
          ))}
        </StyledCardsContainer>
      </StyledContainer>
    </>
  );
};
