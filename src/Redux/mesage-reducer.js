import logo from "../Img/favicon 3.svg";

let initialState = {
  titleChat: {
    avatar: logo,
    status: true,
    name: "Qron ID",
  },

  message: [
    {
      timeMessage: "Сегодня",
      bodyMessage: [
        {
          id: 1,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:15",
        },
        {
          id: 2,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:16",
        },
        {
          id: 3,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:17",
        },
      ],
    },
    {
      timeMessage: "Вчера",
      bodyMessage: [
        {
          id: 1,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:22",
        },
        {
          id: 2,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:25",
        },
        {
          id: 3,
          avtor: "Qron ID",
          iconAvtor: logo,
          message: "Здравствуйте! Я могу вам чем-то помочь?",
          time: "20:30",
        },
      ],
    },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default messageReducer;
