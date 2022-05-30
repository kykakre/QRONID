import React from "react";
import TitleCard from "../TitleCard";
import mail from "../../Img/icon/mail.svg";

import AccordeonCard from "../AccordeonCard/AccordeonCard";
import CardMailBody from "./CardMailBody";

export default function CardMail(props) {
  return (
    <div className="card">
      <AccordeonCard
        title={<TitleCard title="Почта и телефоны" icon={mail} />}
        body={<CardMailBody props={props.person} />}
      />
    </div>
  );
}
