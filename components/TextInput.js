const TextInput = ({ value, onChange, suggention }) => {
  return (
    <input
      autoComplete="false"
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={`Paste TV scritp here...?`}
    />
  );
};

export default TextInput;
