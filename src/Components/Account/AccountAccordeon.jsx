import React, { useState } from "react";
import arrow from "../../Img/icon/arrow.svg";
import AccountBody from "./AccountBody";
import Account from "./Account";
import { Dropdown } from "antd";
import "antd/dist/antd.css";

export default function AccountAccordeon(props) {
  const [open, setOpen] = useState(false);
  const openedAccordeon = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Dropdown
        overlay={<AccountBody person={props.person} />}
        trigger={["click"]}
      >
        <div>
          <div className="cursor">
            <Account person={props.person} />
            <img
              className={open ? "dropdown dropdownOpen" : "dropdown"}
              src={arrow}
              alt=""
            />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
