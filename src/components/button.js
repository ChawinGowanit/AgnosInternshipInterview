import styled from "styled-components";

const Button = ({
  selectedAbs,
  setCurrent,
  current,
  selectedFinger,
  sendData,
}) => {
  return (
    <Layout
      onClick={() => {
        if (current == 0) {
          setCurrent(1);
        } else {
          sendData();
        }
      }}
      style={{
        backgroundColor:
          (current == 0 && selectedAbs) || (current == 1 && selectedFinger)
            ? "#1a59c2"
            : "gray",
        pointerEvents:
          (current == 0 && selectedAbs) || (current == 1 && selectedFinger)
            ? "unset"
            : "none",
      }}
    >
      ต่อไป
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1a59c2;
  color: white;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #074dc2 !important;
  }
`;

export default Button;
