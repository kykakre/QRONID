import React from "react";
import close from "../../Img/icon/close.svg";
import styled from "styled-components";
import plus from "../../Img/icon/plus.svg";
import Card from "./Card";
import bank from "../../Img/icon/bank.svg";
import security from "../../Img/icon/security.svg";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import CardDetal from "./CardDetal";
export default function CardPayBody(props) {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    @media (max-width: 576px) {
      justify-content: center;
    }
  `;
  const ModalFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const ModalTitle = styled.div`
    font-size: 20px;
    color: #000;
    font-weight: 500;
    margin-bottom: 25px;
  `;
  const ModalAdd = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 15px;
  `;
  const ModalButton = styled.div`
    align-items: flex-end;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #01a2fa;
    border-radius: 8px;
    transition: 0.38s ease-in-out;

    width: 45%;
    a {
      display: flex;
      align-items: center;
    }
    @media (max-width: 1400px) {
      width: 100%;
    }
  `;
  const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `;
  const ModalText = styled.div`
    font-size: 14px;
    color: #fff;
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
    font-size: 12px;
    color: #fff;
  `;
  const Security = styled.img`
    width: 33px;
    height: 33px;
    margin-right: 15px;

    object-fit: contain;
    border-radius: 5px;
    @media (max-width: 576px) {
      margin-right: 5px;
    }
  `;
  const SecurityText = styled.div`
    font-size: 14px;
    color: #cbcbcb;
    @media (max-width: 576px) {
      text-align: center;
    }
  `;
  const Close = styled.img`
    width: 16px;
    height: 16px;
    object-fit: contain;
  `;
  function closeModal() {
    setIsOpen(false);
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  let cardHolder = props.cardPay.map((e) => (
    <Card id={e.id} number={e.number} key={e.key} bank={e.bank} />
  ));
  let cardDetal = props.cardPay.map((e) => (
    <CardDetal
      id={e.id}
      key={e.key}
      number={e.number}
      bank={e.bank}
      logo={e.logo}
    />
  ));
  return (
    <div>
      <Subtitle>
        Легко платить в Qron и на всех сайтах, где принимают Qron Pay.
        <NavLink to="/"> Узнать больше</NavLink>
      </Subtitle>
      <Flex>
        <div onClick={() => setIsOpen(true)} className="addCard">
          <Icon src={plus} />
          <Content>
            <Title>Добавить карту</Title>
            <Text>Чтобы платить в один клик</Text>
          </Content>
        </div>
        {cardHolder}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"
        >
          <ModalFlex>
            <ModalTitle>Мои карты</ModalTitle>
            <Close src={close} onClick={closeModal} />
          </ModalFlex>
          <ModalFlex>{cardDetal}</ModalFlex>
          <FlexEnd>
            <ModalButton>
              <NavLink to="#">
                <ModalAdd src={plus} />
                <ModalText>Добавить новую карту</ModalText>
              </NavLink>
            </ModalButton>
          </FlexEnd>
        </Modal>
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
