import React from "react";
import GifProvider from "./GifProvider";
import DogProvider from "./DoggoProvider";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(20deg, #7dfe3f, #bbe3eb, #cb9ecf);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-family: Andale Mono, monospace;
`;
const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Trev's restful-react POC</h1>
      <>
        <GifProvider />
      </>
      <>
        <DogProvider />
      </>
    </AppContainer>
  );
};

export default App;
