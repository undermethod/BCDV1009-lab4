import { render, screen } from '@testing-library/react';
import App from './App';
import DATA from "./mockData";
import userEvent from "@testing-library/user-event";

describe("<Form /> tests", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App tasks={DATA} />, div);
  });

  it("should add properly", () => {
    render(<App tasks={DATA} />);
    userEvent.type(screen.getByRole("textbox"), "new thing to be done");
    userEvent.click(screen.getByText(/Add/));
    expect(screen.queryByText(/new thing to be done/i)).toBeInTheDocument();
  });
});
