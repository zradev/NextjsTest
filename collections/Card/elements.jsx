import styled from "styled-components";
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled((props) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px 0 15px 0;
`;

export const StyledImageContainer = styled(({ height, width, ...props }) => (
  <div {...props} />
))`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 40px;
`;

export const StyledTextContainer = styled((props) => <div {...props} />)`
  color: black;
  width: 65%;
  font-family: sans-serif;
  margin-right: 40px;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: bold;
  font-weight: 700;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 500;
`;
