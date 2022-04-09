import styled from "styled-components";
function App() {
  return (
    <Layout>
      <Test>Init</Test>
    </Layout>
  );
}
const Layout = styled.div`
  height: 100vh;
  background-color: #ecf6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = styled.div`
  color: red;
`;

export default App;
