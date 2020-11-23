import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Search from "./Search";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeftNav = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;

const Header = () => {
  return (
    <header style={{ borderBottom: "2px solid #e1e1e1", padding: "1rem 0" }}>
      <HeaderContainer>
        <HeaderLeftNav>
          <p>Product Hunt</p>
          <Search />
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">Popular</Link>
            <Link href="/">New Product</Link>
          </nav>
        </HeaderLeftNav>
        <div>
          <p>Hola, Matias</p>
          <button type="button">Log Out</button>
          <Link href="/">Log In</Link>
          <Link href="/">Register</Link>
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
