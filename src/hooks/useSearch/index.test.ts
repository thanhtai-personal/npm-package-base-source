import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react-hooks'
import { useSearch } from "./index"

describe('useSearch', () => {
  it('should return a default search term and original items', () => {
    const items = [{ title: 'Star Wars' }];

    const { result } = renderHook(() => useSearch(items));

    expect(result.current.searchTerm).toBe('');
    expect(result.current.filteredItems).toEqual(items);
  });
});
