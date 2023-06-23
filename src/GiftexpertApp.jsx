import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const generateFakeCategories = async () => {
  const resp = await fetch(`https://randomuser.me/api/`);
  const { results } = await resp.json();
  const { first, last } = results[0].name;
  return `${first} ${last}`;
};

export const GiftexpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Ball"]);

  const handleNewCateogry = () => {
    generateFakeCategories().then((name) => {
      setCategories([name, ...categories]);
    });
  };
  return (
    <>
      {/* title */}
      <h1>Gift Expert App</h1>

      {/* Input */}
      <AddCategory />

      {/* Gift List */}
      <button onClick={handleNewCateogry}>Add Category</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
