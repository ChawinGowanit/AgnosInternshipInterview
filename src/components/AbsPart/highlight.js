import styled from "styled-components";
const imgPathList = [
  "epigastrium",
  "luq",
  "llq",
  "suprapubic",
  "rlq",
  "ruq",
  "umbilicus",
  "all-abs",
];
const firstPart = require(`../../assets/abs/highlights/${imgPathList[0]}-highlight.png`);
const secondPart = require(`../../assets/abs/highlights/${imgPathList[1]}-highlight.png`);
const thirdPart = require(`../../assets/abs/highlights/${imgPathList[2]}-highlight.png`);
const forthPart = require(`../../assets/abs/highlights/${imgPathList[3]}-highlight.png`);
const fifthPart = require(`../../assets/abs/highlights/${imgPathList[4]}-highlight.png`);
const sixthPart = require(`../../assets/abs/highlights/${imgPathList[5]}-highlight.png`);
const seventhPart = require(`../../assets/abs/highlights/${imgPathList[6]}-highlight.png`);
const eightPart = require(`../../assets/abs/highlights/${imgPathList[7]}-highlight.png`);

const Highlight = ({ absPart }) => {
  return <Layout bg={absPart}></Layout>;
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
  ${({ bg }) => bg[0] == 4 && `background-image:url(${fifthPart})`}
  ${({ bg }) => bg[0] == 5 && `background-image:url(${sixthPart})`}
  ${({ bg }) => bg[0] == 6 && `background-image:url(${seventhPart})`}
  ${({ bg }) => bg[0] == 7 && `background-image:url(${eightPart})`}
`;

export default Highlight;
