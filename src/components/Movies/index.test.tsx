// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Movies } from ".";
import * as Hooks from "./../../hooks";

describe("Movies", () => {
  const useSearchSpy = vi.spyOn(Hooks, "useSearch");
  const items = [
    {
      title: "Star Wars",
      release_date: "1977-05-25",
      director: "George Lucas",
      opening_crawl: "It is a period of civil war.",
    },
  ];

  useSearchSpy.mockReturnValue({
    searchTerm: "",
    setSearchTerm: vi.fn(),
    filteredItems: items,
  });

  it("should render the the list of movies", () => {
    const { getByTestId } = render(<Movies />);
    expect(getByTestId("movies-list").children.length).toBe(items.length);
  });

  afterEach(() => {
    useSearchSpy.mockClear();
  });
});
