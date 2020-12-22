import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const linkElement = screen.getByText("Game of Pig");
  expect(linkElement).toBeInTheDocument();
});
