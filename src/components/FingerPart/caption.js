import styled from "styled-components";
const imgPathList = ["dip", "pip", "mcp"];
const firstPart = require(`../../assets/finger/captions/${imgPathList[0]}-active.png`);
const secondPart = require(`../../assets/finger/captions/${imgPathList[1]}-active.png`);
const thirdPart = require(`../../assets/finger/captions/${imgPathList[2]}-active.png`);

const Caption = ({ fingerPart }) => {
  return <Layout bg={fingerPart}></Layout>;
};
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -683px;
  background-size: cover;
  ${({ bg }) => (bg.length == 0 || bg[0] == 3) && `background-image:none`}
  ${({ bg }) => bg[0] == 0 && `background-image:url(${firstPart})`}
  ${({ bg }) => bg[0] == 1 && `background-image:url(${secondPart})`}
  ${({ bg }) => bg[0] == 2 && `background-image:url(${thirdPart})`}
`;

export default Caption;
