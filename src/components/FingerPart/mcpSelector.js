import styled from "styled-components";

const McpSelector = ({ setSelectedFinger, setfingerPart }) => {
  return (
    <Layout>
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([2]);
        }}
        style={{
          top: 48,
          left: 10,
          transform: "rotate(-20deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([2]);
        }}
        style={{
          top: 24,
          left: 56,
          transform: "rotate(-20deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([2]);
        }}
        style={{
          top: 10,
          left: 108,
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([2]);
        }}
        style={{
          top: 10,
          left: 162,
          transform: "rotate(6deg)",
        }}
      />
      <Joint
        onClick={() => {
          setSelectedFinger(true);
          setfingerPart([2]);
        }}
        style={{
          width: 44,
          top: 130,
          left: 244,
          transform: "rotate(40deg)",
        }}
      />
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  width: 300px;
  height: 180px;
  top: 180px;
  left: 40px;
`;

const Joint = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 20px;
  width: 48px;
  height: 30px;
  z-index: 1;
`;

export default McpSelector;
