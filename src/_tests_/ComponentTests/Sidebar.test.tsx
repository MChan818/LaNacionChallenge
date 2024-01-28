import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "../../components/Sidebar/Sidebar";

test("Renders Sidebar", () => {
	//Checks if Sidebar renders
	render(<Sidebar/>);

	//Checks if Sidebar exists
	const tag = screen.getByTestId("sidebar");
    //Checks if Sidebar is generated correctly
	expect(tag).toHaveClass("sidebar__aside")
});
