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
  faqInfo: [
    {
      id: 1,
      title: "Как мои чеки попадут в историю платежей?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Я получу доступ ко всем своим чекам?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      title: "Можно ли получать чеки из оффлайн магазинов?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      title: "Как отключить передачу чеков?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      title: "Где увидеть все кешбэк-акции?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      title: "Сколько времени занимает подключение?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 7,
      title: "Как быстро начислится кешбэк?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
