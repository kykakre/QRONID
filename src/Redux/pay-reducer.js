import yandex from "../Img/icon/yandex.svg";

let initialState = {
  historyInfo: [
    {
      id: 1,
      icon: yandex,
      type: "Транспорт",
      name: "Яндекс Такси",
      pay: -100,
    },
    {
      id: 2,
      icon: yandex,
      type: "Транспорт",
      name: "Яндекс Такси",
      pay: -100,
    },
    {
      id: 3,
      icon: yandex,
      type: "Транспорт",
      name: "Яндекс Такси",
      pay: -100,
    },
    {
      id: 4,
      icon: yandex,
      type: "Транспорт",
      name: "Яндекс Такси",
      pay: -100,
    },
  ],
  checkInfo: [],
};

const payReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default payReducer;
