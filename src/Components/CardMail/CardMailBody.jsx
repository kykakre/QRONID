import React from "react";
import styled from "styled-components";
import TitleText from "../TitleText";

export default function CardMailBody(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `;
  const Text = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
  `;
  const Mail = styled.div`
    font-size: 20px;
  `;
  const Item = styled.div`
    width: 33%;
    @media (max-width: 768px) {
      margin-bottom: 20px;
      width: 100%;
    }
  `;
  return (
    <div>
      <Flex>
        <Item>
          <Text>Адреса на Qron</Text>
          <Mail>{props.props.mail}</Mail>
        </Item>
        <TitleText
          title="Добавить адрес для восстановления"
          text="Для надежной защиты"
        ></TitleText>
        <TitleText
          title="Добавить номер мобильного телефона"
          text="Для восстановления доступа к аккаунту и настройки дополнительной защиты"
        ></TitleText>
      </Flex>
    </div>
  );
}
