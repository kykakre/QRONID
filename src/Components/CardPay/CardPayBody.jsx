import React from "react";

import styled from "styled-components";
import plus from "../../Img/icon/plus.svg";
import Card from "./Card";
import bank from "../../Img/icon/bank.svg";
import security from "../../Img/icon/security.svg";
import { NavLink } from "react-router-dom";
export default function CardPayBody() {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  `;

  const Subtitle = styled.div`
    font-size: 16px;
    color: #333;
    margin-bottom: 25px;
    span {
      color: #cbcbcb;
      font-weight: 600;
    }
  `;
  const CardAdd = styled.div`
    background: linear-gradient(253.3deg, #00e7ff 0%, #01a2fa 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    width: 25%;
    padding-top: 25px;
    padding-left: 25px;
    padding-bottom: 25px;
    padding-right: 25px;
    margin-right: 20px;
    height: 115px;
  `;

  const Icon = styled.img`
    width: 22px;
    height: 22px;
    object-fit: contain;
    margin-right: 15px;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Title = styled.div`
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 7px;
  `;
  const Text = styled.div`
    font-size: 14px;
    color: #fff;
  `;
  const Security = styled.img`
    width: 33px;
    height: 33px;
    margin-right: 15px;

    object-fit: contain;
    border-radius: 5px;
  `;
  const SecurityText = styled.div`
    font-size: 14px;
    color: #cbcbcb;
  `;
  return (
    <div>
      <Subtitle>
        Легко платить в Qron и на всех сайтах, где принимают Qron Pay.
        <span>Узнать больше</span>
      </Subtitle>
      <Flex>
        <CardAdd>
          <Icon src={plus} />
          <Content>
            <Title>Добавить карту</Title>
            <Text>Чтобы платить в один клик</Text>
          </Content>
        </CardAdd>
        <Card text="..7436" icon={bank} />
      </Flex>
      <Flex>
        <Security src={security} />
        <SecurityText>Карты надежно храняться в защитном виде</SecurityText>
      </Flex>
      <NavLink to="#" className="linkBlue">
        История платежей
      </NavLink>
    </div>
  );
}
