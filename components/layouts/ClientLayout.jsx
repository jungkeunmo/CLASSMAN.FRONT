import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Heder";

const Whole = styled.section`
  width: 100%;
  height: 100vh;
`;

const MainWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
`;

const ClientLayout = ({ children }) => {
  return (
    <Whole>
      <GlobalStyles />
      <Header />

      <MainWrapper>{children}</MainWrapper>

      <Footer />
    </Whole>
  );
};

export default ClientLayout;
