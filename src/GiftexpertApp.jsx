import { useState } from "react";

export const GiftexpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Ball"]);
  return (
    <>
      {/* title */}
      <h1>Gift Expert App</h1>

      {/* Input */}

      {/* Gift List */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
