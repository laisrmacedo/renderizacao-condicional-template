import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)

  //ternario
  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {tela===1 ? <TelaLogin /> : <TelaCadastro />}
  //   </MainContainer>
  // );

  //curto circuito
  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {tela && <TelaLogin/> || <TelaCadastro />}
  //   </MainContainer>
  // );

  //Statements
  // if(tela===1){
  //     return (
  //       <MainContainer >
  //       <GlobalStyled />
  //       <TelaLogin />
  //     </MainContainer>
  //   );
  // } else {
  //   return (
  //     <MainContainer >
  //     <GlobalStyled />
  //     <TelaCadastro />
  //   </MainContainer>
  // );
  // }

  // const mudarTela = () => setTela(2)

  switch(tela){
    case 1:
      return (
        <MainContainer >
        <GlobalStyled />
        <TelaLogin mudarTela={() => setTela(2)}/>
      </MainContainer>
    );
    case 2:
      return (
        <MainContainer >
        <GlobalStyled />
        <TelaCadastro 
        mudarTela={() => setTela(1)}
        cadastrado={() => setTela(3)}
        />
      </MainContainer>
    );
    case 3:
      return (
        <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado />
      </MainContainer>
    );
    default:
      return (
        <p>Página não encontrada</p>
      )
  }
}

export default App;