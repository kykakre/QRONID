import React from "react";
import styled from "styled-components";
import arrow from "../../Img/icon/arrow.svg";

export default function Account(props) {
  const Avatar = styled.img`
    width: 45px;
    height: 45px;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 10px;
  `;
  const Text = styled.div`
    font-size: 12px;
    line-height: 110%;
    margin-right: 5px;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;
  const Arrow = styled.img`
    width: 10px;
    height: 5px;
    object-fit: contain;
    margin-left: 10px;
    transform: rotate(180deg);
  `;
  return (
    <div>
      <Flex>
        <Avatar src={props.person.avatar} />
        <Text>{props.person.name}</Text>
        <Text>{props.person.family}</Text>
      </Flex>
    </div>
  );
}
