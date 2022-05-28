import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card/Card";

export default function AccourdCard(props) {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const FlexStart = styled.div`
    display: flex;
    align-items: baseline;
    padding-bottom: 30px;
    border-bottom: 1px solid #cbcbcb;
  `;
  const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
  `;
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const ColumnMin = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Avatar = styled.img`
    width: 115px;
    height: 115px;
    object-fit: contain;
  `;
  const Link = styled.div`
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #01a2fa;
  `;
  const Name = styled.div`
    font-size: 30px;
    font-weight: 500;
  `;
  const Mail = styled.div`
    margin-top: 15px;
    font-size: 16px;
  `;
  const Text = styled.div`
    span {
      font-weight: 600;
    }
  `;
  const Span = styled.span`
    color: #cbcbcb;
    font-weight: 600;
  `;
  return (
    <div className="card">
      <Flex>
        <Column>
          <Avatar src={props.person.avatar} />
          <NavLink to="#">
            <Link>Добавить фото</Link>
          </NavLink>
          <Name>{props.person.name}</Name>
          <Name>{props.person.family}</Name>
          <Mail>{props.person.mail}</Mail>
        </Column>
        <ColumnMin>
          <FlexStart>
            <Text>
              Для изменения персональной информации обратитесь к администратору
              домена
            </Text>
            <Text>Россия</Text>
          </FlexStart>
          <FlexCenter>
            <Text>
              Имя в комментариях и отзывах: <span>Иван Иванов</span>
            </Text>
            <Text>
              Публичный адрес: <Span>Не выбран</Span>{" "}
            </Text>
          </FlexCenter>
        </ColumnMin>
        <Card card={props.card} />
      </Flex>
    </div>
  );
}
