import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

export default function Card(props) {
  const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 24%;
  `;
  let Item = props.card.map((e) => (
    <CardItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
      link={e.link}
      href={e.href}
    />
  ));
  return <Column>{Item}</Column>;
}
