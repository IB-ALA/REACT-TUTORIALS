import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { registerFormControls } from "../../config";
import { AuthContext } from "../../context";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";

function RegisterPage() {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    // user,
    // loading,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleRegisterFormSubmit(e) {
    e.preventDefault();
    registerWithFirebase()
      .then((result) => {
        if (result?.user) {
          updateProfile(result?.user, { displayName: registerFormData?.name })
            .then(() => {
              console.log(
                "auth.currentUser.displayName: ",
                auth.currentUser.displayName
              );
              if (auth.currentUser.displayName) {
                setLoading(false);
                navigate("/profile");
              }
            })
            .catch((error) => console.log({ error }));
        }
        // navigate("/profile");
        console.log({ result });
      })
      .catch((error) => console.log({ error }));

    // console.log({registerFormData});
    setRegisterFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  // doing it in the context file
  // if (loading) {
  //   <h1>loading...</h1>;
  // }

  // not advised to do it here
  // if (user) return navigate("/profile");

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Register Page</p>
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Save"}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
