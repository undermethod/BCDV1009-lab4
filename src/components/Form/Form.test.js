import { render, screen } from '@testing-library/react';
import Form from "./Form";
import DATA from "../../mockData";

describe("<Form /> tests", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Form tasks={DATA} />, div);
  });
});
