import { useState } from "react";
import styled from "styled-components";

import Button from "./components/button";
import Card from "./components/card";
function App() {
  const absList = [
    "Epigastrium",
    "Left Upper Quadrant",
    "Left Lower Quadrant",
    "Suprapubic",
    "Right Lower Quadrant",
    "Right Upper Quadrant",
    "Umbilicus",
    "All Over Abs",
  ];
  const fingerList = [
    "Distal Interphalangeal Joints (DIP)",
    "Proximal Interphalangeal Joints(PIP)",
    "Metacarpophalangeal (MCP)",
    "Other part or joint",
  ];
  const [current, setCurrent] = useState(0);

  const [selectedAbs, setSelectedAbs] = useState(false);
  const [absPart, setAbsPart] = useState([]);

  const [selectedFinger, setSelectedFinger] = useState(false);
  const [fingerPart, setfingerPart] = useState([]);
  const sendData = () => {
    console.log("Pain Abs part :", absList[absPart[0]]);
    console.log("Pain Finger part :", fingerList[fingerPart[0]]);
  };
  return (
    <Layout>
      <CardAndButton>
        <Card
          current={current}
          setAbsPart={setAbsPart}
          setSelectedAbs={setSelectedAbs}
          absPart={absPart}
          setSelectedFinger={setSelectedFinger}
          fingerPart={fingerPart}
          setfingerPart={setfingerPart}
        />
        <Button
          sendData={sendData}
          current={current}
          selectedAbs={selectedAbs}
          setCurrent={setCurrent}
          selectedFinger={selectedFinger}
        />
      </CardAndButton>
    </Layout>
  );
}
const Layout = styled.div`
  height: 100vh;
  background-color: #ecf6ff;
`;
const CardAndButton = styled.div`
  margin: auto;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default App;
