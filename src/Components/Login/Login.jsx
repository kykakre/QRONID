import React from "react";
import icon from "../../Img/favicon 3.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import vk from "../../Img/icon/vk.svg";
import google from "../../Img/icon/google.svg";
export default function Login() {
  const Autorize = styled.div`
    min-width: 550px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const Logo = styled.img`
    widows: 55px;
    height: 55px;
    object-fit: contain;
    margin-bottom: 25px;
  `;
  const Title = styled.div`
    font-size: 18px;
    letter-spacing: 0.02em;
    margin-bottom: 55px;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const FormTitle = styled.div`
    font-size: 16px;
    color: #787878;
    margin-bottom: 15px;
  `;
  const Input = styled.input`
    font-size: 22px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #01a2fa;
    font-family: "Commissioner";
    font-weight: 500;
    &::placeholder {
      color: #cbcbcb;
    }
  `;
  const Nav = styled.div`
    margin-top: 15px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
  `;
  const Btn = styled.input`
    background: #01a2fa;
    border-radius: 7px;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 70px;
    padding-right: 70px;
    border: 1px solid #01a2fa;
    transition: 0.38s ease-in-out;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #01a2fa;
    }
  `;
  const Create = styled.div`
    border: 1px solid #cbcbcb;
    border-radius: 7px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    display: block;
    transition: 0.38s ease-in-out;
    &:hover {
      background: #000;
      color: #fff;
    }
  `;
  const AutorizeInTo = styled.div`
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 35px;
    text-align: center;
  `;
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const LinkIkon = styled.img`
    margin-left: 10px;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    object-fit: contain;
    &:last-child {
    }
  `;
  const Footer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const FooterTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
    text-align: center;
  `;
  const FooterText = styled.div`
    font-size: 16px;
    text-align: center;
  `;
  return (
    <Autorize>
      <Logo src={icon} />
      <Title>Войти с QRON ID</Title>
      <Form>
        <FormTitle>Введите ваш ID</FormTitle>
        <Input placeholder="Телефон или почта" />
        <NavLink to="#">
          <Nav>Не помню</Nav>
        </NavLink>
        <Btn type="submit" />
        <NavLink to="#">
          <Create>Создать ID</Create>
        </NavLink>
        <AutorizeInTo>Войти с помощью</AutorizeInTo>
      </Form>
      <Flex>
        <NavLink to="#">
          <LinkIkon src={vk} />
        </NavLink>
        <NavLink to="#">
          <LinkIkon src={google} />
        </NavLink>
      </Flex>
      <Footer>
        <FooterTitle>QRON ID</FooterTitle>
        <FooterText>ключ для любого платежа</FooterText>
      </Footer>
    </Autorize>
  );
}
