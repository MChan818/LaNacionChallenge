import "@testing-library/jest-dom";
import { getTags, getOrderedTags, TTags } from "../helpers/HelperArray";
import { testArticles } from "../testObjects/testObjects";
import { TTaxonomyTags } from "../types/TArticle";

describe("HelperArray tests", () => {
	test("getTags test", () => {
		const test: TTaxonomyTags[] = getTags(testArticles);

        expect(test[0]).toHaveProperty("slug");
        expect(test[0]).toHaveProperty("text");

		expect(test).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					slug: "leche-tid47244",
					text: "Leche",
				}),
			]),
		);
	});

	test("getTags empty test", () => {
		//Checks what happens if empty array (failes to retrieve data) is passed
        const emptyTest: TTaxonomyTags[] = getTags({articles:[]});
        expect(emptyTest.length).toBe(0);
	});

	test("getOrderedTags test", () => {
		const test: TTags[] = getOrderedTags(testArticles);
		//Checks if TTags has Count property
		expect(test[0]).toHaveProperty("count");

		//Checks if there's at least 1 object with 2 counts (repetitive value)
		expect(test).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					count: 2,
				}),
			]),
		);
		const sortingFunction = (a: TTags, b: TTags) => {
			if (a.count < b.count) return 1;
			if (a.count > b.count) return -1;
			return 0;
		};

		//Checks if array was sorted from ascending count to descending count
		expect(test).toStrictEqual([...test].sort(sortingFunction));
	});

    test("getOrderedTags empty test", () => {
		//Checks what happens if empty array (failes to retrieve data) is passed
        const emptyTest: TTaxonomyTags[] = getOrderedTags({articles:[]});
        expect(emptyTest.length).toBe(0);
	});
});
