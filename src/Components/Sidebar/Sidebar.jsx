import React from "react";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import logo from "../../Img/logo.svg";
import account from "../../Img/icon/account.svg";
import card from "../../Img/icon/card.svg";
import message from "../../Img/icon/message.svg";
import { NavLink } from "react-router-dom";
import AccountAccordeon from "../Account/AccountAccordeon";

export default function Sidebar(props) {
  const { width } = useWindowSize();
  const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const Logo = styled.img`
    width: 165px;
    height: 26px;
    object-fit: contain;
    margin-bottom: 44px;
    @media (max-width: 992px) {
      margin-bottom: 25px;
    }
  `;
  const Nav = styled.div`
    @media (max-width: 992px) {
      display: flex;
      align-items: center;
    }
    @media (max-width: 340px) {
      &::-webkit-scrollbar {
        width: 0;
      }
      overflow: auto;
    }
  `;

  const ItemIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: contain;
    margin-right: 20px;
  `;
  const ItemText = styled.div`
    font-weight: 600;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  if (width <= 992) {
    return (
      <Sidebar>
        <Flex>
          <Logo src={logo} alt="logo" />
          <AccountAccordeon />
        </Flex>
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
  } else {
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
}
