import styled from "styled-components";

const SelectedPart = ({ setAbsPart, setSelectedAbs }) => {
  return (
    <Layout>
      <AbsParts>
        <Epigastrium
          onClick={() => {
            setAbsPart([0]);
            setSelectedAbs(true);
          }}
        />
        <Luq
          onClick={() => {
            setAbsPart([1]);
            setSelectedAbs(true);
          }}
        />
        <Llq
          onClick={() => {
            setAbsPart([2]);
            setSelectedAbs(true);
          }}
        />
        <Suprapubic
          onClick={() => {
            setAbsPart([3]);
            setSelectedAbs(true);
          }}
        />
        <Rlq
          onClick={() => {
            setAbsPart([4]);
            setSelectedAbs(true);
          }}
        />
        <Ruq
          onClick={() => {
            setAbsPart([5]);
            setSelectedAbs(true);
          }}
        />
        <Umbilicus
          onClick={() => {
            setAbsPart([6]);
            setSelectedAbs(true);
          }}
        />
      </AbsParts>
      <AllAbsParts
        onClick={() => {
          setAbsPart([7]);
          setSelectedAbs(true);
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
const AbsParts = styled.div`
  width: 200px;
  height: 260px;
  position: relative;
  top: 220px;
  left: 180px;
  z-index: 1;
`;
const Epigastrium = styled.div`
  cursor: pointer;
  position: absolute;
  width: 65px;
  height: 60px;
  border-radius: 100%;
  transform: scaleY(1.25);
  top: 30px;
  left: 67px;
`;
const Luq = styled.div`
  position: absolute;
  cursor: pointer;
  width: 62px;
  height: 65px;
  border-radius: 100%;

  top: 70px;
  left: 125px;
  transform: rotate(30deg);
`;
const Llq = styled.div`
  position: absolute;
  cursor: pointer;
  width: 62px;
  height: 65px;
  border-radius: 100%;
  top: 145px;
  left: 128px;
  transform: rotate(45deg);
`;
const Umbilicus = styled.div`
  cursor: pointer;
  width: 54px;
  height: 54px;
  border-radius: 100%;
  position: absolute;
  top: 115px;
  left: 72px;
`;
const Rlq = styled.div`
  position: absolute;
  cursor: pointer;
  width: 62px;
  height: 65px;
  border-radius: 100%;

  top: 145px;
  left: 10px;
  transform: rotate(-45deg);
`;
const Ruq = styled.div`
  position: absolute;
  cursor: pointer;
  width: 62px;
  height: 65px;
  border-radius: 100%;

  top: 70px;
  left: 10px;
  transform: rotate(-30deg);
`;
const Suprapubic = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  transform: scaleY(1.22);
  top: 185px;
  left: 70px;
`;
const AllAbsParts = styled.div`
  z-index: 1;
  cursor: pointer;
  width: 185px;
  height: 60px;
  position: relative;
  top: 335px;
  left: 185px;
  border-radius: 50px;
`;
export default SelectedPart;
