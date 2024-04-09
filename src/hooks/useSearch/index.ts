import { useState } from "react";

export interface Movie {
  title: string;
  release_date?: string;
  director?: string;
  opening_crawl?: string;
}

export interface SearchState {
  searchTerm?: string;
  filteredItems?: Movie[];
}

export interface UseSearchResponse extends SearchState {
  setSearchTerm: (value: string) => void;
}

export const useSearch = (movies: Movie[]): UseSearchResponse => {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    filteredItems: movies,
  } as SearchState);

  const setSearchTerm = (value: string) => {
    setSearchState((prev) => ({
      ...prev,
      searchTerm: value,
      filteredItems: movies.filter((item) => item.title.includes(value))
    }))
  }

  return {
    ...searchState,
    setSearchTerm
  } as UseSearchResponse;
}
