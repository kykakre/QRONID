import React from "react";
import styled from "styled-components";

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
    margin-left: 5px;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;
  return (
    <Flex>
      <Avatar src={props.person.avatar} />
      <Text>{props.person.name}</Text>
      <Text>{props.person.family}</Text>
    </Flex>
  );
}
