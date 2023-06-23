import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing component GifItem", () => {
  const image = {
    title: "Messi",
    url: "https://my-messi.gif/",
  };

  test("Should be a match with the snapshot", () => {
    const { container } = render(<GifItem {...image} />);
    expect(container).toMatchSnapshot();
  });

  test("Should be show the image  with the correct URL and ALT", () => {
    render(<GifItem {...image} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test("Should b show the right title", () => {
    render(<GifItem {...image} />);
    expect(screen.getByText(image.title)).toBeTruthy();
  });
});
