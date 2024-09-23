import { useEffect, useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");

  function handleInputChange(e) {
    console.log(e);
    const { value } = e.target;
    setNameValue(value);
  }

  return (
    <div>
      <h1>Form</h1>
      <input
        value={nameValue}
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default FormComponent;
