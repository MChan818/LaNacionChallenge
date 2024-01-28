import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleDate from "../../../components/Article/ArticleDate";

test("Renders ArticleDate", () => {
	const exampleDate: string = "2019-12-08T17:50:17.735Z";
	//Checks if ArticleDate renders
	render(<ArticleDate date={exampleDate} />);

	//Checks if ArticleDate exists
	const date = screen.getByTestId("articleDate");
	//Checks if ArticleDate returns formatted date correctly
	expect(date).toHaveTextContent("8 de Diciembre de 2019");
});
