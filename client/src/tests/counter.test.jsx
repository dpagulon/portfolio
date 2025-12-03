import { render, fireEvent, screen } from "@testing-library/react";
 import App from '../App';
 import Counter from "../counter";

//test block
 test("increments counter", () => {
 // render the component on virtual dom
 render(<App />);
 render(<Counter />);

//select the elements you want to interact with
 const counter = screen.getByTestId("counter");
 const incrementBtn = screen.getByTestId("increment");

//interact with those elements
 fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});