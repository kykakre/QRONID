import React from "react";
import styled from "styled-components";
import setting from "../../Img/icon/settings.svg";

export default function ChatTitle(props) {
  const SpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    border-bottom: 1px solid #cbcbcb;
    padding-right: 15px;
  `;

  const Flex = styled.div`
    display: flex;
    align-items: center;
  `;
  const Title = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 5px;
  `;
  const Text = styled.div`
    font-size: 10px;
    color: #a0a0a0;
    font-weight: 300;
  `;
  const Icon = styled.img`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    object-fit: contain;
  `;
  const Img = styled.div`
    position: relative;
    margin-right: 10px;
    &:before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      position: absolute;
      background: ${props.props.status ? "#3bc46d" : "transparent"};
    }
  `;
  const Setting = styled.img`
    width: 5px;
    height: 25px;
    object-fit: contain;
    cursor: pointer;
  `;

  return (
    <SpaceBetween>
      <Flex>
        <Img>
          <Icon src={props.props.avatar} />
        </Img>

        <div>
          <Title>{props.props.name}</Title>
          <Text>{props.props.status ? " В сети" : "Не в сети"}</Text>
        </div>
      </Flex>
      <Setting src={setting} />
    </SpaceBetween>
  );
}
