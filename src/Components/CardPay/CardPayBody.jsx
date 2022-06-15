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
    margin-bottom: 20px;
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
  const CardAdd = styled.div`
    background: linear-gradient(253.3deg, #00e7ff 0%, #01a2fa 100%);
    background-size: 100%, 100%;
    border-radius: 18px;
    display: flex;
    align-items: center;
    width: 17%;
    padding-top: 15px;
    padding-left: 19px;
    padding-bottom: 14px;
    padding-right: 28px;
    margin-right: 20px;
    height: 115px;
    transition: 0.38s ease-in-out;
    &:hover {
      background-size: 150%, 100%;
    }
    @media (max-width: 991px) {
      width: 30%;
    }
  `;

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
    @media (max-width: 1200px) {
      font-size: 14px;
    }
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
        <CardAdd>
          <NavLink to="/">
            <Icon src={plus} />
            <Content>
              <Title>Добавить карту</Title>
              <Text>Чтобы платить в один клик</Text>
            </Content>
          </NavLink>
        </CardAdd>

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
