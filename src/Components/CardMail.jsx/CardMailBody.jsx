import React, {useState} from "react";
import styled from "styled-components";
import TitleText from "../TitleText";
import ModalContainer from "../Modal/ModalContainer";
import ModalEmail from "../Modal/ModalEmail";

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

  const[isVisibleModal,setIsVisibleModal]=useState(false);


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
              customOnClick={()=>setIsVisibleModal(true)}

          />


          <TitleText
              href="phone"
              title="Добавить номер мобильного телефона"
              text="Для восстановления доступа к аккаунту и настройки дополнительной защиты"
          />


      </Flex>
      <ModalContainer isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} closable={false}>
        <ModalEmail setIsVisibleModal={setIsVisibleModal}/>
      </ModalContainer>
    </div>
  );
}
