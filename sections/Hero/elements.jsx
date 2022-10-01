import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  @media (max-width: 1024px) {
    width: 100vw;
    margin: auto;
  }
`;
