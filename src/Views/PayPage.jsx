import React from "react";
import Account from "../Components/Account/Account";
import styled from "styled-components";
import Service from "../Components/Service/Service";
import HistoryPay from "../Components/HistoryPay/HistoryPay";

export default function PayPage(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
  `;
  return (
    <Flex>
      <div className="content-min">
        <Service className="card-min" />
        <HistoryPay pay={props.pay} check={props.check} />
      </div>
      <Account person={props.person} />
    </Flex>
  );
}
