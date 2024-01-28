import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Tag from "../../components/Tags/Tag";
import { TTaxonomyTags } from "../../types/TArticle";

test("Renders Tag", () => {
	const tagTestObject: TTaxonomyTags = {
		slug: "milk-asd",
		text: "Milk",
	};
	//Checks if Title renders
	render(<Tag slug={tagTestObject.slug} text={tagTestObject.text} />);

	//Checks if title exists
	const tag = screen.getByTestId("tag");
	expect(tag).toHaveTextContent("Milk");
    //Checks if href is generated correctly
	expect(screen.getByTestId("tag")).toHaveAttribute("href", "/tema/milk-asd");
});
