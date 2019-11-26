import React from "react";
import styled from "@babel/core";
import { ThemeProvider } from "emotion-theming";

const theme = {
  prim: "blue",
  sec: "green",
  thir: "hotpink"
};

const Flexbox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const Box1 = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.prim};
`;

const Box2 = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.sec};
`;

const Box3 = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.thir};
`;

function App() {
  return (
    <>
      <ThemeProvider>
        <Flexbox>
          <Box1 />
          <Box2 />
          <Box3 />
        </Flexbox>
      </ThemeProvider>
    </>
  );
}

export default App;
