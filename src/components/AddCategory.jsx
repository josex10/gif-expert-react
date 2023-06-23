import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifts"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
