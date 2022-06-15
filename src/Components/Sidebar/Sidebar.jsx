import React from "react";
import styled from "styled-components";
import logo from "../../Img/logo.svg";
import account from "../../Img/icon/account.svg";
import card from "../../Img/icon/card.svg";
import message from "../../Img/icon/message.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar(props) {
  const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const Logo = styled.img`
    width: 165px;
    height: 25px;
    object-fit: contain;
    margin-bottom: 40px;
  `;
  const Nav = styled.div``;

  const ItemIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: contain;
    margin-right: 20px;
  `;
  const ItemText = styled.div`
    font-weight: 600;
  `;

  return (
    <Sidebar>
      <Logo src={logo} alt="logo" />
      <Nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? `NavItem NavItemActive` : `NavItem `
          }
          to=""
        >
          <ItemIcon src={account} />
          <ItemText>Аккаунт</ItemText>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `NavItem NavItemActive` : `NavItem `
          }
          to="/pay"
        >
          <ItemIcon src={card} />
          <ItemText>Платежи</ItemText>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `NavItem NavItemActive` : `NavItem `
          }
          to="/support"
        >
          <ItemIcon src={message} />
          <ItemText>Центр поддержки</ItemText>
        </NavLink>
      </Nav>
    </Sidebar>
  );
}
