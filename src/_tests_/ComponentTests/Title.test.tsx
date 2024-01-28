import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../../components/Title/Title";

test("Renders title", () => {
    //Chekcs if Title renders
	render(<Title title="TESTING"/>);
    
    //Chekcs if title exists
	const title = screen.getByTestId("title");
	expect(title).toHaveTextContent("TESTING");
});
