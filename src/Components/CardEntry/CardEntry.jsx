import React from "react";

import clock from "../../Img/icon/clock.svg";
import TitleCard from "../TitleCard";
import AccordeonCard from "../AccordeonCard/AccordeonCard";
import CardEntryBody from "./CardEntryBody";

export default function CardEntry(props) {
  return (
    <div className="card">
      <AccordeonCard
        title={<TitleCard title="Входы и устройства" icon={clock} />}
        body={<CardEntryBody />}
      />
    </div>
  );
}
