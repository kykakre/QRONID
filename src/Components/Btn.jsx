import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Btn(props) {
  const Link = styled.div`
    background: #01a2fa;
    border-radius: 7px;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 70px;
    padding-right: 70px;
    border: 1px solid #01a2fa;
    transition: 0.38s ease-in-out;
    &:hover {
      background: #fff;
      color: #01a2fa;
    }
  `;
  return (
    <NavLink to="#">
      <Link>{props.text}</Link>
    </NavLink>
  );
}
