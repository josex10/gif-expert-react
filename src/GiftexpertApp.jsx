import { useState } from "react";
import { GifGrid, AddCategory } from "./components";
export const GiftexpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Ball"]);
  const onAddNewCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };
  return (
    <>
      {/* title */}
      <h1>Gift Expert App</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddNewCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
