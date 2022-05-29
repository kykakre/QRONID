import React from "react";
import TitleText from "../TitleText";
import styled from "styled-components";
import clock from "../../Img/icon/clock.svg";
import TitleCard from "../TitleCard";

export default function CardEntry(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <div className="card">
      <TitleCard title="Входы и устройства" icon={clock} />
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
