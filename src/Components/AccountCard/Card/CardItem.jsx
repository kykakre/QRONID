import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function CardItem(props) {
  const FlexStart = styled.div`
    display: flex;
    align-items: flex-start;
  `;
  const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 15px;
  `;
  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Text = styled.div`
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
    line-height: 125%;
  `;
  const Link = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  `;
  return (
    <NavLink to={props.href} className="Link">
      <FlexStart>
        <Icon src={props.icon} />
        <Column>
          <Text>{props.text}</Text>
          <Link>{props.link}</Link>
        </Column>
      </FlexStart>
    </NavLink>
  );
}
