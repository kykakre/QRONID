import React from "react";
import AccordeonCard from "../AccordeonCard/AccordeonCard";
import Account from "./Account";
import AccountContainer from "./AccountContainer";

export default function AccountAccordeon(props) {
  return (
    <div>
      <AccordeonCard
        title={<AccountContainer />}
        body={"alsjdklsjdlk"}
      ></AccordeonCard>
    </div>
  );
}
