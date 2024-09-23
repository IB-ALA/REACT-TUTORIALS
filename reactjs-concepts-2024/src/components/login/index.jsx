import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = { email: "", password: "" };

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function onHandleSubmit(e) {
    e.preventDefault();

    // some api & BD logic here
    console.log("loginFormData: ", loginFormData);
    setLoginFormData(initialFormData);
  }

  return (
    <div>
      <h1>Login page/component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default LoginComponent;
