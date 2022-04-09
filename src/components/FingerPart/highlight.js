import styled from "styled-components";
const imgPathList = ["dip", "pip", "mcp", "others"];

const firstPart = require(`../../assets/finger/highlights/${imgPathList[0]}-highlight.png`);
const secondPart = require(`../../assets/finger/highlights/${imgPathList[1]}-highlight.png`);
const thirdPart = require(`../../assets/finger/highlights/${imgPathList[2]}-highlight.png`);
const forthPart = require(`../../assets/finger/highlights/${imgPathList[3]}-highlight.png`);

const Highlight = ({ fingerPart }) => {
  return <Layout bg={fingerPart}></Layout>;
};
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -1366px;
  background-size: cover;
  ${({ bg }) => bg.length == 0 && `background-image:none`}
  ${({ bg }) => bg[0] == 0 && `background-image:url(${firstPart})`}
  ${({ bg }) => bg[0] == 1 && `background-image:url(${secondPart})`}
  ${({ bg }) => bg[0] == 2 && `background-image:url(${thirdPart})`}
  ${({ bg }) => bg[0] == 3 && `background-image:url(${forthPart})`}
`;

export default Highlight;
