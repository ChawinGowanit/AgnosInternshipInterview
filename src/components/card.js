import styled from "styled-components";
import Abs from "./abs";
import Finger from "./finger";
const Card = ({
  setAbsPart,
  setSelectedAbs,
  absPart,
  current,
  setSelectedFinger,
  fingerPart,
  setfingerPart,
}) => {
  return (
    <Layout>
      {current == 0 ? (
        <p>จุดไหนที่คุณปวดท้องมากที่สุด</p>
      ) : (
        <p>จุดไหนที่คุณปวดนิ้วมากที่สุด</p>
      )}
      {current == 0 ? (
        <Abs
          setAbsPart={setAbsPart}
          setSelectedAbs={setSelectedAbs}
          absPart={absPart}
        />
      ) : (
        <Finger
          setSelectedFinger={setSelectedFinger}
          setfingerPart={setfingerPart}
          fingerPart={fingerPart}
        />
      )}
    </Layout>
  );
};
const Layout = styled.div`
  font-weight: bold;
  font-size: 30px;
  background-color: white;
  border-radius: 5%;
  box-shadow: 0px 10px 10px #888888;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Card;
