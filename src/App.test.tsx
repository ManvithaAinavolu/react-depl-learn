import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react ci cd link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn ci\/cd/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders the increment component',()=>{
  render(<App/>);
  const bt=screen.getByText("Add");
  expect(bt).toBeInTheDocument()
});

test('clicking increment should increment the value component', () => {
  render(<App />);
  const bt = screen.getByText("Add");
  expect(bt).toBeInTheDocument();

  // Use getByTestId instead of getAllByTestId for a single element
  const counter = screen.getByTestId("count");
  expect(counter).toBeInTheDocument();
  
  // Access textContent instead of innerHTML for the counter's value
  expect(counter.textContent).toBe("0");

  fireEvent.click(bt);

  // Check if the value has incremented
  expect(counter.textContent).toBe("1");
});
