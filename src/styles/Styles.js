import styled, { css } from "styled-components";
import { default as UnstyledButton } from "react-bootstrap/Button";

export const Font = styled.div`
  /* font-family: 'Literata', serif; */
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
`;

export const H2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  margin-top: 1rem;
  /* font-family: 'Literata', serif; */
`;
export const H3 = styled.h3`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* font-family: 'Literata', serif; */
`;
export const H4 = styled.h4`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* font-family: 'Literata', serif; */
`;
export const H5 = styled.h5`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* font-family: 'Literata', serif; */
`;

export const Grid = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;
  /* font-family: 'Literata', serif; */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const GridTechs = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;
  /* font-family: 'Literata', serif; */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
export const GridAbout = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;
  /* font-family: 'Literata', serif; */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const WelcomeGrid = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;
  /* font-family: 'Literata', serif; */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PlaceholderDivImg = styled.div`
  width: 128px;
  height: 192px;
  background: center / contain no-repeat url(${(props) => props.bgImage});
  border-right: solid gray 1px;
  flex-shrink: 0;
`;
export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: none;

  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Button = styled(UnstyledButton)`
  margin-left: 0.5rem;
`;

export const CardContent = styled.div`
  padding: 0.25rem 1rem; // [y] [x]
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  height: 192px;
  flex-direction: row;
  overflow: hidden;
  border-radius: ${(props) => props.bRadius ?? "5px"};
  background-color: white;
  position: relative;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    ${CardContent} {
      /* filter: blur(1px); */
      filter: opacity(50%);
    }

    ${ButtonGroup} {
      display: block;
    }
  }
`;
export const Card2 = styled.div`
  display: flex;
  height: 122px;
  flex-direction: row-reverse;
  overflow: hidden;
  border-radius: ${(props) => props.bRadius ?? "5px"};
  background-color: white;
  position: relative;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    ${ButtonGroup} {
      display: block;
    }
  }
`;

export const CardTitle = styled.h5`
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.lines}; /* number of lines to show */
  --line-height: 1.3;
  line-height: var(--line-height); /* fallback */
  max-height: calc(
    var(--line-height) * ${(props) => props.lines}
  ); /* fallback */
`;

export const GoogleImage = styled.div`
  display: flex;
`;
export const LinkStyle = styled.a`
  color: black;
`;

export const RoundImageHeader = styled.img`
  border-radius: 50%;
`;

export const RoundImage = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 50%;

  @media (min-width: 576px) {
    height: 200px;
    border-radius: 50%;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    height: 300px;
    border-radius: 50%;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 400px;
    border-radius: 50%;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height: 500px;
    border-radius: 50%;
  }
`;

export const CardText = styled.p`
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-bottom: 0.25rem;

  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize};
        `
      : ""}

  ${({ fontWeight }) =>
    fontWeight
      ? css`
          font-weight: ${fontWeight};
        `
      : ""}

${({ mt }) =>
    mt
      ? css`
          margin-top: ${mt};
        `
      : ""}

  // line clamping
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.lines}; /* number of lines to show */
  --line-height: 1.5;
  line-height: var(--line-height); /* fallback */
  max-height: calc(
    var(--line-height) * ${(props) => props.lines}
  ); /* fallback */
`;
export const ClickP = styled.p`
  cursor: pointer;
  border: 1px solid #17A2B8;
  border-radius: 3px;
  margin: 0px;
  padding: 0.3rem;

  ${({ arrow }) =>
    arrow
      ? css`
          background-color: #17A2B8;
          border-bottom: 10px solid #17A2B8;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
        `
      : ""}
  
`;

export const GridFriendsBooks = styled.div`
  display: grid;
  row-gap: 0.5rem;
  column-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0.5rem;
  /* font-family: 'Literata', serif; */

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const EmptyMessageCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
