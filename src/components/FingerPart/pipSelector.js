import styled from "styled-components";

const PipSelector = ({ setSelectedFinger, setfingerPart }) => {
  return (
    <Layout>
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([1]);
        }}
        style={{
          top: 84,
          left: 8,
          transform: "rotate(-20deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([1]);
        }}
        style={{
          top: 32,
          left: 64,
          transform: "rotate(-10deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([1]);
        }}
        style={{
          top: 6,
          left: 126,
          transform: "rotate(-6deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([1]);
        }}
        style={{
          width: 40,
          top: 16,
          left: 190,
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([1]);
        }}
        style={{
          top: 152,
          left: 312,
          transform: "rotate(36deg)",
        }}
      />
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  width: 360px;
  height: 190px;
  top: 80px;
  left: 20px;
`;

const Joint = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 20px;
  width: 38px;
  height: 25px;
  z-index: 1;
`;

export default PipSelector;
