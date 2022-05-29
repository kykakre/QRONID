import React from "react";
import Accordeon from "../Accordeon/Accordeon";
import Title from "../Title";
import styled from "styled-components";

export default function Faq(props) {
  let elementItem = props.faq.map((e) => (
    <Accordeon id={e.id} key={e.id} title={e.title} text={e.text} />
  ));
  const Content = styled.div`
    margin-top: 25px;
  `;
  return (
    <div className="card-min">
      <Title title="Остались еще вопросы?" />
      <Content>{elementItem}</Content>
    </div>
  );
}
