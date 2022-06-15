import React from "react";
import styled from "styled-components";
import arrow from "../Img/icon/arrow.svg";

export default function TitleCard(props) {
  const Flex = styled.div`
    display: flex;
    align-items: center;
  `;
  const Img = styled.img`
    width: 24px;
    height: 18px;
    object-fit: contain;
    margin-right: 15px;
  `;
  const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
  `;
  const SpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Logo = styled.img`
    width: 120px;
    height: 30px;
    object-fit: contain;
    margin-left: 10px;
  `;
  let LogoBlock = <Logo src={props.logo} />;
  return (
    <SpaceBetween>
      <Flex>
        <Img src={props.icon}></Img>
        <Title>{props.title}</Title>
        {props.logo ? LogoBlock : ""}
      </Flex>
    </SpaceBetween>
  );
}
