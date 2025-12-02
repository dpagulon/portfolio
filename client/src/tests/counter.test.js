import { render, fireEvent, screen } from "@testing-library/react";
import App from '../App';
import Counter from "../counter";

test("increments counter", () => {
    render(<App />);
render(<Counter />);

const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

fireEvent.click(incrementBtn);

expect(counter).toHaveTextContent("1");
});