import styled from "styled-components";
import SelectedPart from "./AbsPart/selectPart";
import Caption from "./AbsPart/caption";
import Highlight from "./AbsPart/highlight";
const imgPath = require("../assets/abs/default-abs.png");

const Abs = ({ setSelectedAbs, setAbsPart, absPart }) => {
  return (
    <Layout>
      <SelectedPart setSelectedAbs={setSelectedAbs} setAbsPart={setAbsPart} />
      <Caption absPart={absPart} />
      <Highlight absPart={absPart} />
    </Layout>
  );
};
const Layout = styled.div`
  width: 580px;
  height: 683px;
  background-image: url(${imgPath});
  background-size: cover;
`;

export default Abs;
