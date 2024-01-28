import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleDesc from "../../../components/Article/ArticleDesc";

import { testArticle } from "../../../testObjects/testObjects";

test("Renders articleDesc", () => {
	render(<ArticleDesc data={testArticle} />);
	//Chekcs if articleDesc exists
	const articleDesc = screen.getByTestId("articleDesc");
	expect(articleDesc).toHaveTextContent(testArticle.headlines.basic);
	expect(articleDesc).toHaveTextContent(testArticle.promo_items.basic.subtitle);
	const articleDate = screen.getByTestId("articleDate");
	expect(articleDate).toHaveTextContent("6 de Diciembre de 2019");
});
