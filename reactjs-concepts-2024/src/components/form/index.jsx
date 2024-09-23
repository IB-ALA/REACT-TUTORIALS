import { useEffect, useState } from "react";

function FormComponent() {
  // later, we can use useRef for it

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleInputChange(e) {
    // console.log(e);
    const { value } = e.target;
    setNameValue(value);
  }
  function handleEmailChange(e) {
    const { value } = e.target;
    setEmailValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("name value: ", nameValue);
    // console.log("email value: ", emailValue);

    console.log(formData);
  }

  function handleOnchange(e) {
    // console.log(e.target.name);

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    // some api call here to save the data
    console.log(formData);
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={handleOnchange}
          // onChange={(e) =>
          //   setFormData({ ...formData, [e.target.name]: e.target.value })
          // }
        />
        <input
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleOnchange}
          // onChange={(e) =>
          //   setFormData({ ...formData, [e.target.name]: e.target.value })
          // }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
