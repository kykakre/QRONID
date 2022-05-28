import avatar from "../Img/icon/avatar.svg";
import heart from "../Img/icon/heart.svg";
import importIcon from "../Img/icon/import.svg";
import phone from "../Img/icon/phone.svg";
import bankIcon from "../Img/icon/bank.svg";

let initialState = {
  personInfo: {
    id: 1,
    name: "Иван ",
    family: "Иванов",
    avatar: avatar,
    mail: "ivan_ivanov@mail.ru",
    country: "Россия",
  },
  cardItems: [
    {
      id: 1,
      icon: heart,
      text: "Семья: пригласите близких и поделитесь подпиской или картой",
      link: "Пригласить близких",
      href: "#",
    },
    {
      id: 2,
      icon: importIcon,
      text: "Аккаунт защищен слабо",
      link: "Усилить защиту",
      href: "#",
    },
    {
      id: 3,
      icon: phone,
      text: "Добавить телефон, чтобы усилить защиту",
      link: "Добавить телефон",
      href: "#",
    },
  ],
  CardPayInfo: [
    {
      id: 1,
      number: "..7436",
      bank: bankIcon,
    },
  ],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default accountReducer;
