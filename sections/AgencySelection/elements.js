import styled from "styled-components";
import { Card } from "../../collections/Card/Card";
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
  SectionParagraph,
} from "~/components";

export const StyledContainer = styled((props) => (
  <SectionContainer {...props} />
))`
  margin-top: 80px;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 35px;
  background-image: url("/img/background.png");
  @media (max-width: 1024px) {
    flex-direction: column;
    border-top: 1px solid #f1f1f1;
  }
`;

export const StyledTextContainer = styled((props) => <div {...props} />)`
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  h2 {
    line-height: 3.5rem;
  }
  h3 {
    font-weight: 400;
  }
`;

export const StyledImageContainer = styled(({ height, width, ...props }) => (
  <div {...props} />
))`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 0 20px 0 20px;
`;

export const StyledCardsContainer = styled((props) => <div {...props} />)`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 472px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const StyledCard = styled(({ width, background, ...props }) => (
  <Card {...props} />
))`
  width: ${(width) => width};
  background-color: ${(background) => background};
  border: 2px solid transparent;
  &:hover {
    background-color: #f1f1f1;
    border: 2px solid #1a71f8;
    border-radius: 8px;
    h2 {
      color: #1a71f8;
    }
  }
`;

export const StyledTextPopup = styled((props) => (
  <SectionParagraph {...props} />
))`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
    transform: rotate(10deg);
    color: #e44e5b;
    max-width: 125px;
    word-wrap: break-word;
    font-weight: 700;
  }
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
`;
export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
`;
