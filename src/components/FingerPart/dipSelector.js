import styled from "styled-components";

const DipSelector = ({
  setSelectedFinger,
  setfingerPart = { setfingerPart },
}) => {
  return (
    <Layout>
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([0]);
        }}
        style={{
          top: 114,
          left: 8,
          transform: "rotate(-20deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([0]);
        }}
        style={{
          top: 41,
          left: 78,
          transform: "rotate(-6deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([0]);
        }}
        style={{
          top: 10,
          left: 140,
          transform: "rotate(-6deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([0]);
        }}
        style={{
          top: 28,
          left: 212,
        }}
      />
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  width: 260px;
  height: 150px;
`;

const Joint = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 20px;
  width: 38px;
  height: 25px;
  z-index: 1;
`;

export default DipSelector;
