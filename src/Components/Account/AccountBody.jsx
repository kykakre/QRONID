import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function AccountBody(props) {
  const Tab = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding-left: 30px;
    padding-bottom: 23px;
    padding-top: 24px;
    padding-right: 65px;
    z-index: 3;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  `;
  const Avatar = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
  `;
  const Link = styled.div`
    font-size: 12px;
    margin-bottom: 7px;
    color: #333;
    transition: 0.38s ease-in-out;
    &:hover {
      color: #cbcbcb;
    }
  `;
  const Info = styled.div`
    font-weight: 600;
    font-size: 12px;
    margin-left: 10px;
  `;
  return (
    <Tab>
      <Flex>
        <Avatar src={props.person.avatar} />
        <Info>{props.person.mail}</Info>
      </Flex>
      <Link>
        <NavLink to="">Выйти</NavLink>
      </Link>
      <Link>
        <NavLink to="">Настройки</NavLink>
      </Link>
      <Link>
        <NavLink to="">Помощь</NavLink>
      </Link>
    </Tab>
  );
}
