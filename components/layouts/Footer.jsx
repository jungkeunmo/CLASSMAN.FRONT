import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const FooterWrapper = styled.section`
  width: 100%;
  height: 60px;
  background-color: green;
`;

const Footer = () => {
  const router = useRouter();

  const movePage = (target) => {
    router.push(target);
  };

  return (
    <FooterWrapper>
      <button onClick={() => movePage("/home")}>home</button>
      <button onClick={() => movePage("/lecture")}>lecture</button>
      <button onClick={() => movePage("/mylecture")}>mylecture</button>
      <button onClick={() => movePage("/support")}>support</button>
    </FooterWrapper>
  );
};

export default Footer;
