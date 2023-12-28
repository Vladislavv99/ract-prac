import { useReducer, useRef } from "react";

const initialState = { name: "", lastName: "", birthYear: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "addName":
      return { ...state, name: action.payload };
    case "addLastName":
      return { ...state, lastName: action.payload };
    case "addBirthYear":
      return { ...state, birthYear: action.payload };
    default:
      return { state };
  }
};

function TestUseReduserComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputNameRef = useRef();
  const inputLastNameRef = useRef();
  const inputBirthYear = useRef();

  const addName = () => {
    dispatch({ type: "addName", payload: inputNameRef.current.value });
    inputNameRef.current.value = "";
  };

  const addLastName = () => {
    dispatch({
      type: "addLastName",
      payload: inputLastNameRef.current.value,
    });
    inputLastNameRef.current.value = "";
  };

  const addBirthYear = () => {
    dispatch({
      type: "addBirthYear",
      payload: inputBirthYear.current.value,
    });
    inputBirthYear.current.value = "";
  };

  return (
    <div>
      <div>
        <input ref={inputNameRef} />
        <button onClick={addName}>Add name</button>
      </div>
      <div>
        <input ref={inputLastNameRef} />
        <button onClick={addLastName}>Add last name</button>
      </div>
      <div>
        <input ref={inputBirthYear} />
        <button onClick={addBirthYear}>Add birth year</button>
      </div>
      <p>Name: {state.name}</p>
      <p>Last name: {state.lastName}</p>
      <p>Birth year: {state.birthYear}</p>
    </div>
  );
}

export default TestUseReduserComponent;
