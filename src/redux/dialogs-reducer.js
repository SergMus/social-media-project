const ADD_MESSAGE_TO_ARRAY = "ADD-MESSAGE-TO-ARRAY";

let initialState = {
  persons: [
    {
      id: 1,
      name: "Valera",
      icon:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-256.png",
    },
    {
      id: 2,
      name: "Dimych",
      icon:
        "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Rapper-2-256.png",
    },
    {
      id: 3,
      name: "Sveta",
      icon:
        "https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-31-256.png",
    },
    {
      id: 4,
      name: "Andrey",
      icon:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/coffee_zorro_avatar_cup-256.png",
    },
    {
      id: 5,
      name: "Marina",
      icon:
        "https://cdn2.iconfinder.com/data/icons/health-care-and-first-responders/64/doctor-asian-female-coronavirus-256.png",
    },
    {
      id: 6,
      name: "John Doe",
      icon:
        "https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-39-256.png",
    },
  ],
  messages: [
    { id: 1, text: "Yo" },
    { id: 2, text: "How are you doing?" },
    { id: 3, text: "Whats does its mean?" },
    { id: 4, text: "I am fine" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE-TO-ARRAY": {
      let id = Math.floor(Date.now() + Math.random());
      let newMessage = { id, text: action.values };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessageToArrayCreator = (values) => {
  return { type: ADD_MESSAGE_TO_ARRAY, values };
};

export default dialogsReducer;
