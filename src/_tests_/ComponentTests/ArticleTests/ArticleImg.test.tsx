import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleImg from "../../../components/Article/ArticleImg";

import { testArticle } from "../../../testObjects/testObjects";

test("Renders articleImg", () => {
    //Renders Article image
	render(<ArticleImg src={testArticle.promo_items.basic.url} url={testArticle.website_url} />);
	//Chekcs if articleImgRedirect exists and if href is correct
	const articleImgRedirect = screen.getByTestId("articleImgRedirect");
	expect(articleImgRedirect).toHaveClass("figure");
	expect(articleImgRedirect).toHaveAttribute("href", testArticle.website_url);
    
	//Chekcs if articleImg exists and if src is correct
	const articleImg = screen.getByTestId("articleImg");
	expect(articleImg).toHaveClass("content-img");
	expect(articleImg).toHaveAttribute("src", testArticle.promo_items.basic.url);
});
