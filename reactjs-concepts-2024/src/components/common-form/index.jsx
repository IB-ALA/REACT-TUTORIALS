import CommonInput from "../common-input";

const formTypes = { INPUT: "input", SELECT: "select", TEXTAREA: "textarea" };

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  function renderFormElement(formElement, index) {
    const { type, label, name, id, placeholder, componentType } = formElement;

    let content = null;

    switch (componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            key={index}
            type={type}
            label={label}
            name={name}
            id={id}
            placeholder={placeholder}
            value={formData[formElement.name]}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        );
        break;

      default:
        // set a default value
        break;
    }

    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((formElement, index) =>
            renderFormElement(formElement, index)
          )
        : null}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;
