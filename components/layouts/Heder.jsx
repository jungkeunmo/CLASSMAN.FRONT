import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const HeaderWrapper = styled.section`
  width: 100%;
  height: 30px;
  background-color: blue;
`;

const Header = () => {
  const router = useRouter();

  const movePage = (target) => {
    router.push(target);
  };

  return (
    <HeaderWrapper>
      Header
      <button onClick={() => movePage("/setting")}>Setting</button>
    </HeaderWrapper>
  );
};

export default Header;
