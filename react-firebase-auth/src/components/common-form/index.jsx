import CommonInput from "../common-input";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = {},
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  function renderFormElement({
    componentType,
    type,
    placeholder,
    name,
    className,
  }) {
    let element = null;
    const { INPUT, SELECT, TEXTAREA } = formElementTypes;

    switch (componentType) {
      case INPUT:
        element = (
          <CommonInput
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        );
        break;

      default:
        element = (
          <CommonInput
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={(e) =>
              setFormData({ ...formData, [name]: e.target.value })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((formElement) => renderFormElement(formElement))}

      <button className="mt-2">{buttonText || "Submit"}</button>
    </form>
  );
}

export default CommonForm;
