import { MemoryRouter } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { render, screen } from "@testing-library/react";

describe("PokemonCard Component", () => {
  it("should render a title based on props", () => {
    render(
      <MemoryRouter>
        <PokemonCard
          pokemon={{
            id: 1,
            name: "example",
            level: 2000,
            maxHp: 3000,
            type: "grass",
          }}
          handleDelete={() => console.log("delete")}
        />
      </MemoryRouter>
    );
    const title = screen.queryByText(/example/i);
    expect(title).toBeVisible();
  });
});
