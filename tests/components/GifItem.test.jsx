import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing component GifItem", () => {
  const image = {
    title: "Messi",
    url: "https://my-messi.gif",
  };

  test("Should be a match with the snapshot", () => {
    const { container } = render(<GifItem {...image} />);
    expect(container).toMatchSnapshot();
  });
});
