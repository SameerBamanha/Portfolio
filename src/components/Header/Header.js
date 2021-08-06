import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoAttachSharp } from "react-icons/io5";
import { ImHome } from "react-icons/im";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    {/* /*For later*/}
    {/* <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        ></a>
      </Link>
    </Div1> */}
    <Div2>
      <li>
        <Link href="#project">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/SameerBamanha">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sameer-bamanha/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://clist.by/coder/SameerBamanha/">
        <IoAttachSharp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
