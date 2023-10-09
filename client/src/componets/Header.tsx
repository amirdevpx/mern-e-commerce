import React from "react";
import { RiUser3Line, RiShoppingBag2Line, RiHeartLine } from "react-icons/ri";
import Container from "./Container";
import FlexBox from "./FlexBox";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header id="header" className="header bg-white shadow">
      <Container className="py-4">
        <FlexBox justify="between">
          <Logo />
          <Buttons />
        </FlexBox>
      </Container>
    </header>
  );
};

const Buttons = () => {
  return (
    <FlexBox gap="two">
      <Button variant="muted-ghost">
        <RiUser3Line />
        <span className="hidden md:inline">Kirish</span>
      </Button>
      <Button variant="muted-ghost">
        <RiHeartLine />
        <span className="hidden md:inline">Saralangan</span>
      </Button>
      <Button variant="muted-ghost">
        <RiShoppingBag2Line />
        <span className="hidden md:inline">Savat</span>
      </Button>
    </FlexBox>
  );
};

export default Header;
