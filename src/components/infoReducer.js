import { useReducer } from "react";

export const initialState = {
  selectedId: 0,
  messages: {
    0: "gen info",
    1: "edu",
    2: "edp",
    3: "first name",
    4: "last name",
    5: "email",
    6: "phone #",
    7: "school name",
    8: "field of study",
    9: "years of study",
    10: "company name",
    11: "position title",
    12: "responsibilities",
  },
};
export default function infoReducer(state, action) {
  const storedMessages = [];

  switch (action.type) {
    case "CHANGED_SELECTION": {
      return {
        ...state,
        selectedId: action.inputFieldId,
      };
    }
    case "EDITED_MESSAGE": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "SENT_MESSAGE": {
      // storedMessages.push(state.messages)
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    case "SET_INPUT": {
      return {
        ...state,
        userInput: action.payload,
      };
    }
    default: {
      throw Error("ERROR" + action.type);
    }
  }
}
