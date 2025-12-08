// script src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders webrtc title", () => {
  render(<App />);
  const titleElement = screen.getByText(/WebRTC 1:N 화상/i);
  expect(titleElement).toBeInTheDocument();
});
