function CommonInput({
  type,
  label,
  name,
  onChange,
  id,
  value,
  placeholder,
  index,
}) {
  return (
    <div key={index}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
