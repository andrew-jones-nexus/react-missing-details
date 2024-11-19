import { render } from "@testing-library/react";
import HeaderBar from ".";
import { describe, it, expect } from "vitest";

describe("HeaderBar", () => {
 it("renders the page title and image", () => {
  const { getByText, getByAltText } = render(
   <HeaderBar title="title" image="image" />
  );

  expect(getByText("title")).toBeTruthy();

  expect(getByAltText("Placeholder")).toBeTruthy();
 });
});
