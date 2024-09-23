import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialRegisterData = { name: "", email: "", password: "" };

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(initialRegisterData);

  function handleRegisterOnSubmit(e) {
    e.preventDefault();

    // some api & BD logic here
    console.log("registerFormData: ", registerFormData);
    setRegisterFormData(initialRegisterData);
  }

  return (
    <div>
      <h1>Register page/component</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

export default RegisterComponent;
