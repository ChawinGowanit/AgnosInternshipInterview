import styled from "styled-components";
import SelectedPart from "./FingerPart/selectPart";
import Caption from "./FingerPart/caption";
import Highlight from "./FingerPart/highlight";
const imgPath = require("../assets/finger/default-finger.png");

const Finger = ({ setSelectedFinger, setfingerPart, fingerPart }) => {
  return (
    <Layout>
      <SelectedPart
        setSelectedFinger={setSelectedFinger}
        setfingerPart={setfingerPart}
      />
      <Caption fingerPart={fingerPart} />
      <Highlight fingerPart={fingerPart} />
    </Layout>
  );
};
const Layout = styled.div`
  width: 580px;
  height: 683px;
  background-image: url(${imgPath});
  background-size: cover;
`;

export default Finger;
