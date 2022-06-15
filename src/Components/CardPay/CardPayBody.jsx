import React from "react";

import styled from "styled-components";
import plus from "../../Img/icon/plus.svg";
import Card from "./Card";
import bank from "../../Img/icon/bank.svg";
import security from "../../Img/icon/security.svg";
import { NavLink } from "react-router-dom";
export default function CardPayBody(props) {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
  `;

  const Subtitle = styled.div`
    font-size: 16px;
    color: #333;
    margin-bottom: 25px;
    a {
      color: #cbcbcb;
      font-weight: 600;
      transition: 0.38s ease-in-out;
      &:hover {
        color: #01a2fa;
      }
    }
  `;
  const CardAdd = styled.div``;

  const Icon = styled.img`
    width: 22px;
    height: 22px;
    object-fit: contain;
    margin-bottom: 12px;
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
    font-size: 12px;
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
  let cardHolder = props.cardPay.map((e) => (
    <Card id={e.id} number={e.number} key={e.key} bank={e.bank} />
  ));
  return (
    <div>
      <Subtitle>
        Легко платить в Qron и на всех сайтах, где принимают Qron Pay.
        <NavLink to="/"> Узнать больше</NavLink>
      </Subtitle>
      <Flex>
        <NavLink className="addCard" to="/">
          <CardAdd>
            <Icon src={plus} />
            <Content>
              <Title>Добавить карту</Title>
              <Text>Чтобы платить в один клик</Text>
            </Content>
          </CardAdd>
        </NavLink>

        {cardHolder}
      </Flex>
      <Flex>
        <Security src={security} />
        <SecurityText>Карты надежно храняться в защитном виде</SecurityText>
      </Flex>
      <NavLink to="#">
        <div className="linkBlue">История платежей</div>
      </NavLink>
    </div>
  );
}
