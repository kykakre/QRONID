import React, {useState} from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import ModalContainer from "../../Modal/ModalContainer";
import InviteModal from "../../Modal/InviteModal";

export default function Card(props) {


  const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    @media (max-width: 991px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  `;

  const [isVisibleModal,setIsVisibleModal]= useState(false);

  return <Column>
    <CardItem customOnClick={()=>setIsVisibleModal(true)} {...props.card[0]}/>
    <CardItem {...props.card[1]}/>
    <CardItem {...props.card[2]}/>
    <ModalContainer isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} closable={true}><InviteModal/></ModalContainer>
  </Column>;
}
