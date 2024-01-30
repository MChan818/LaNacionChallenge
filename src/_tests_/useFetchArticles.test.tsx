/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchArticles from "../hooks/useFetchArticles";
import { testArticle } from "../testObjects/testObjects";
import { TArticle7 } from "../types/TArticle";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(testArticle),
	}),
) as jest.Mock;

describe("useFetchArticles", () => {
	it("should return the initial values for data, error and loading", async () => {
		const { result } = renderHook(() => useFetchArticles());
		await waitFor(() => {
			expect(result.current.data).toMatchObject<TArticle7<{ subtype: "7" } | { subtype: "1" }>>(testArticle);
		});
	});
});
