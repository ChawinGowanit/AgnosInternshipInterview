import styled from "styled-components";
import DipSelector from "./dipSelector";
import PipSelector from "./pipSelector";
import McpSelector from "./mcpSelector";
const SelectedPart = ({ setSelectedFinger, setfingerPart }) => {
  return (
    <Layout>
      <FingerParts>
        <DipSelector
          setSelectedFinger={setSelectedFinger}
          setfingerPart={setfingerPart}
        />
        <PipSelector
          setSelectedFinger={setSelectedFinger}
          setfingerPart={setfingerPart}
        />
        <McpSelector
          setSelectedFinger={setSelectedFinger}
          setfingerPart={setfingerPart}
        />
      </FingerParts>
      <OtherPart
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([3]);
        }}
      />
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const FingerParts = styled.div`
  width: 380px;
  height: 360px;
  position: relative;
  z-index: 1;
  left: 110px;
  top: 50px;
`;
const OtherPart = styled.div`
  cursor: pointer;
  position: relative;
  width: 400px;
  height: 60px;
  top: 254px;
  left: 80px;
  border-radius: 50px;
  z-index: 1;
`;
export default SelectedPart;
