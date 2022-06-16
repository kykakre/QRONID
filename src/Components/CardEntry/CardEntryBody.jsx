import React from "react";
import TitleText from "../TitleText";
import styled from "styled-components";

export default function CardEntryBody(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <div>
      <Flex>
        <TitleText
          title="История входов"
          text="Последний вход: 20 февраля, 12:36,AndroidBrowser"
        ></TitleText>
        <TitleText
          title="Устройства, сервисы и программы"
          text="Список всех мест, в которых вы автоматизированы"
        ></TitleText>
        <TitleText
          title="Выйти на всех устройствах"
          text="Если есть сомнения или подозрения"
        ></TitleText>
      </Flex>
    </div>
  );
}
