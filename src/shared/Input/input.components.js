// useRAeducer was used here to manage state of input and validation - updates the state and re-render the component
import React, { useReducer, useEffect } from "react";

import { validate } from "../../utils/validators";
import "./input.styles.css";

// Reducer
//  the reducer recieves an action & current state, we dispatch the action, update the current state based on the
// action received & return a new state & re-render the component
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      // what we return after change is called and dispatched
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = ({
  id,
  label,
  placeholder,
  rows,
  type,
  element,
  errorText,
  validators,
  onInput,
  initialValue,
  initialValid,
  options,
  min,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  // input re-renders if any of the dependencies change - used for validators
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  // This function triggers on every key stroke - storing the value and also validating it.
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  // This defines the input for the form - either imput or select or  textarea
  const main =
    element === "input" ? (
      <input
        onChange={changeHandler}
        onBlur={touchHandler}
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        min={min}
      />
    ) : element === "select" ? (
      <select onChange={changeHandler} onBlur={touchHandler} id={id}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <textarea
        onChange={changeHandler}
        onBlur={touchHandler}
        id={id}
        rows={rows || 7}
        value={inputState.value}
        style={{ whiteSpace: "pre-line" }}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {main}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
