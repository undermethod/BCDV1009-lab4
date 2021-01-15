import { render, screen } from '@testing-library/react';
import List from "./List";
import DATA from "../../../mockData";

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<List tasks={DATA} />, div);
});
