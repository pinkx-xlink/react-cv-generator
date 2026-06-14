import { useReducer, useRef } from "react";
import "./styles/InputFieldsList.css";
import { initialState } from "./infoReducer";

export default function InputFieldsList({ inputFields, selectedId, dispatch }) {
  // const [state, dispatch] = useReducer(useReducer, name, initialState)
  return (
    <section className="input-fields-list">
      <ul>
        {inputFields.map((inputField) => (
          <li key={inputField.id}>
            <button
              onClick={() => {
                dispatch({
                  type: "CHANGED_SELECTION",
                  inputFieldId: inputField.id,
                });
              }}
            >
              {selectedId === inputField.id ? (
                <b>{inputField.name}</b>
              ) : (
                inputField.name
              )}
              {inputField.name}
            </button>

            {/* <ul>
          {inputFields.map(inputField => (
            <li key={inputField.name}>
              {inputField.name}
            </li>
          ))}
        </ul>  */}
          </li>
        ))}
      </ul>
    </section>
  );
}
