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
    width: 100%;
  `;
  const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 25px;
  `;
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
  `;
  const ColumnMin = styled.div`
    width: 38%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  `;
  const Avatar = styled.img`
    width: 115px;
    height: 115px;
    object-fit: contain;
  `;
  const Link = styled.div`
    font-size: 11px;
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 110%;
    position: relative;

    color: #01a2fa;
    &::before {
      content: "";
      transition: 0.38s ease-in-out;
      position: absolute;
      left: 50%;
      bottom: -10px;
      background: #01a2fa;
      width: 0;
      height: 1.5px;
      opacity: 0;
      border-radius: 1px;
    }
    &:hover {
      &::before {
        left: 0;
        opacity: 1;
        width: 100%;
      }
    }
  `;
  const Name = styled.div`
    font-size: 30px;
    font-weight: 500;
    line-height: 110%;
  `;
  const Mail = styled.div`
    margin-top: 15px;
    font-size: 16px;
  `;
  const Text = styled.div`
    width: 62%;
    margin-right: 7px;
    div {
      font-weight: 600;
    }
  `;
  const TextMin = styled.div`
    width: 36.5%;
    div {
      color: #cbcbcb;
      font-weight: 600;
    }
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
            <TextMin>Россия</TextMin>
          </FlexStart>
          <FlexCenter>
            <Text>
              Имя в комментариях и отзывах: <div>Иван Иванов</div>
            </Text>
            <TextMin>
              Публичный адрес: <div>Не выбран</div>
            </TextMin>
          </FlexCenter>
        </ColumnMin>
        <Card card={props.card} />
      </Flex>
    </div>
  );
}
