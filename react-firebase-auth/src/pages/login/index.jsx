import { useContext } from "react";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import CommonForm from "../../components/common-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    loginFormData,
    setLoginFormData,
    loginWithFirebase,
    user,
    loading,
    setLoading,
  } = useContext(AuthContext);
  // console.log("login");
  const navigate = useNavigate();

  function handleLoginOnSubmit(e) {
    e.preventDefault();
    loginWithFirebase()
      .then((result) => {
        if (result) {
          setLoading(false);
          setLoginFormData({
            email: "",
            password: "",
          });
          navigate("/profile");
        }
        console.log({ result });
      })
      .catch((error) => console.log({ error }));
    // console.log({loginFormData});
  }

  // if (loading) return <h1>loading...</h1>;

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md p-4">
      <div className="px-6 py-5">
        <h2>Welcome Back</h2>
        <p>Login Page</p>
      </div>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={loginFormData}
        setFormData={setLoginFormData}
        onSubmit={handleLoginOnSubmit}
      />
    </div>
  );
}

export default LoginPage;
