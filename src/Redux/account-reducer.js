import avatar from "../Img/icon/avatar.png";
import heart from "../Img/icon/heart.svg";
import importIcon from "../Img/icon/import.svg";
import phone from "../Img/icon/phone.svg";
import bankIcon from "../Img/icon/bank.svg";
import sber from "../Img/icon/sber.svg";
import phoneSetting1 from "../Img/icon/phoneSetting1.svg"
import phoneSetting2 from "../Img/icon/phoneSetting2.svg"
import phoneSetting3 from "../Img/icon/phoneSetting3.svg"

let initialState = {
  personInfo: {
    id: 1,
    name: "Иван ",
    family: "Иванов",
    avatar: avatar,
    mail: "ivan_ivanov@mail.ru",
    country: "Россия",
    number:"+7 999 ***-**-99"
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
      href: "phone",
    },
  ],
  CardPayInfo: [
    {
      id: 1,
      number: "..7436",
      bank: bankIcon,
      logo: sber,
    },
    {
      id: 2,
      number: "..7436",
      logo: sber,
      bank: bankIcon,
    },
    {
      id: 3,
      number: "..7436",
      logo: sber,
      bank: bankIcon,
    },
  ],
  isLogin: false,
  phoneSetting:[
    {
      id:1,
      icon:phoneSetting1,
      title:"Входить с паролем и позвонку",
      text:'Надёжная защита аккаунта',
    },
    {
      id:2,
      icon:phoneSetting2,
      title:"Телефон как логин",
      text:'Входите по номеру телефона вместо логина',
    },
    {
      id:3,
      icon:phoneSetting3,
      title:"Телефон как почта",
      text:'Получайте почту на адрес ',
      mail:"@yandex.ru",
    }
  ]


};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default accountReducer;
