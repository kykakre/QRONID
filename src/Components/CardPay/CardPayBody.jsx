import React from "react";
import close from "../../Img/icon/close.svg";
import style from "./Card.module.scss";
import plus from "../../Img/icon/plus.svg";
import Card from "./Card";
import bank from "../../Img/icon/bank.svg";
import security from "../../Img/icon/security.svg";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import CardDetal from "./CardDetal";
export default function CardPayBody(props) {

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
      <div className={style.paySubtitle}>
        Легко платить в Qron и на всех сайтах, где принимают Qron Pay.
        <NavLink to="/"> Узнать больше</NavLink>
      </div>
      <div className={style.payFlex}>
        <div onClick={() => setIsOpen(true)} className="addCard">
          <img className={style.payIcon} src={plus} />
          <div  className={style.payContent}>
            <div className={style.payTitle}>Добавить карту</div>
            <div className={style.payText}>Чтобы платить в один клик</div>
          </div>
        </div>
        {cardHolder}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"
        >
          <div className={style.payModalFlex}>
            <div className={style.payModalTitle}>Мои карты</div>
            <img className={style.payClose} src={close} onClick={closeModal} />
          </div>
          <div className={style.payModalFlex}>{cardDetal}</div>
          <div className={style.payFlexEnd}>
            <div className={style.payModalButton}>
              <NavLink to="#">
                <img className={style.payModalAdd} src={plus} />
                <div className={style.payModalText}>Добавить новую карту</div>
              </NavLink>
            </div>
          </div>
        </Modal>
      </div>
      <div className={style.payFlex}>
        <img className={style.paySecurity} src={security} />
        <div className={style.paySecurityText}>Карты надежно храняться в защитном виде</div>
      </div>
      <NavLink to="#">
        <div className="linkBlue">История платежей</div>
      </NavLink>
    </div>
  );
}
