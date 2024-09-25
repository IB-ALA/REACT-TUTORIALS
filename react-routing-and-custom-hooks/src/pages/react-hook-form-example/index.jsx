import { useForm } from "react-hook-form";

function ReactHookFormExamplePage() {
  // reommended to use react-hook-form with some library like zod

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // register: registers the input field

  function onSubmitForm(formData) {
    // some api logic
    console.log(formData);
    reset();
  }

  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            id="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p
              style={{ color: "tomato", fontWeight: "bolder", margin: "10px" }}
            >
              Email is required
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            name="password"
            id="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p
              style={{ color: "tomato", fontWeight: "bolder", margin: "10px" }}
            >
              Password is required
            </p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p
              style={{ color: "tomato", fontWeight: "bolder", margin: "10px" }}
            >
              Password should be at least 8 characters! Please verify the
              password that you entered
            </p>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookFormExamplePage;
