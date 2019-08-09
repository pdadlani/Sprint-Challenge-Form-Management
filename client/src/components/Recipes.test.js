import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Recipes from './Recipes.js';

describe("<Recipes />", () => {
  it("renders without crashing", () => {
    render(<Recipes />);
  });
  it("submit button is used", () => {
    let clicked = false;
    const { getByText } = render(<Recipes dataBtn={() => (clicked = true)} />);
    const showButton = getByText(/Let's see delicious results/i);
    fireEvent.click(showButton);
    expect(clicked).toBe(true);
  });
  it("props are passed and working", () => {
    const recipe = render(
      <Recipes
        showRecipeData={true}
        recipeData={[
          {
            name: "sample",
            course: "course",
          }
        ]}
      />
    );
    recipe.getByText(/^sample$/i);
  });
});