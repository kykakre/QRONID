import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import { Tabs, Tab, TabList } from "react-tabs";
import { TabPanel } from "react-tabs";
import QronNull from "../QronNull/QronNull";
import QronHistory from "../QronHistory/QronHistory";
import CheckNull from "../CheckNull/CheckNull";
import Faq from "../Faq/Faq";

export default function HistoryPay(props) {
  return (
    <div className="card-min">
      <Title title="История платежей" />
      <Subtitle subtitle="Некоторые платежи могут быть не видны. Но мы обязательно их добавим." />
      <Tabs className="tabs">
        <TabList className="list">
          <Tab selectedClassName="activeTab" className="tab">
            Qron
          </Tab>
          <Tab selectedClassName="activeTab" className="tab">
            Мои чеки
          </Tab>
        </TabList>

        <TabPanel>
          {props.pay === undefined ? (
            <QronNull />
          ) : (
            <QronHistory pay={props.pay} />
          )}
        </TabPanel>
        <TabPanel>
          {props.check.length === 0 ? <CheckNull /> : <QronHistory />}
        </TabPanel>
      </Tabs>
    </div>
  );
}
