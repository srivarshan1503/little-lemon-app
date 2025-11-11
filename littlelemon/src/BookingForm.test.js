import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders BookingForm fields and submit button", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);

  // Check for date input
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();

  // Check for time select
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();

  // Check for guests input
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();

  // Check for occasion select
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

  // Check for submit button
  expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
});
