import { render, screen } from '@testing-library/react';
import App from './App';
import DATA from "../mockData";

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App tasks={DATA} />, div);
});
