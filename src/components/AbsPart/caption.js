import styled from "styled-components";
const imgPathList = [
  "epigastrium",
  "luq",
  "llq",
  "suprapubic",
  "rlq",
  "ruq",
  "umbilicus",
];
const firstPart = require(`../../assets/abs/captions/${imgPathList[0]}-active.png`);
const secondPart = require(`../../assets/abs/captions/${imgPathList[1]}-active.png`);
const thirdPart = require(`../../assets/abs/captions/${imgPathList[2]}-active.png`);
const forthPart = require(`../../assets/abs/captions/${imgPathList[3]}-active.png`);
const fifthPart = require(`../../assets/abs/captions/${imgPathList[4]}-active.png`);
const sixthPart = require(`../../assets/abs/captions/${imgPathList[5]}-active.png`);
const seventhPart = require(`../../assets/abs/captions/${imgPathList[6]}-active.png`);

const Caption = ({ absPart }) => {
  return <Layout bg={absPart}></Layout>;
};
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -683px;
  background-size: cover;
  ${({ bg }) => (bg.length == 0 || bg[0] == 7) && `background-image:none`}
  ${({ bg }) => bg[0] == 0 && `background-image:url(${firstPart})`}
  ${({ bg }) => bg[0] == 1 && `background-image:url(${secondPart})`}
  ${({ bg }) => bg[0] == 2 && `background-image:url(${thirdPart})`}
  ${({ bg }) => bg[0] == 3 && `background-image:url(${forthPart})`}
  ${({ bg }) => bg[0] == 4 && `background-image:url(${fifthPart})`}
  ${({ bg }) => bg[0] == 5 && `background-image:url(${sixthPart})`}
  ${({ bg }) => bg[0] == 6 && `background-image:url(${seventhPart})`}
`;

export default Caption;
