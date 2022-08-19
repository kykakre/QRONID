import React from "react";
import styled from "styled-components";
import Service from "../Components/Service/Service";
import HistoryPay from "../Components/HistoryPay/HistoryPay";
import Faq from "../Components/Faq/Faq";

export default function PayPage(props) {
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1400px) {
      grid-column-start: 1;
      grid-column-end: -1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  `;
  return (
    <Flex>
      <div className="content-min">
        <Service className="card-min" />
        <HistoryPay pay={props.pay} check={props.check} />
        <Faq faq={props.faq} />
      </div>
    </Flex>
  );
}
