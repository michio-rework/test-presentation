import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Should render the page title", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);

    // Assert
    expect(screen.getByText("React App")).toBeInTheDocument();
  });

  it("Should render the first label", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);
    const first_label = screen.getByLabelText(/First Number/);

    // Assert
    expect(first_label).toBeInTheDocument();
  });

  it("Should render the first input", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);
    const first_number_input = screen.getByPlaceholderText(/First Number/);

    // Assert
    expect(first_number_input).toBeInTheDocument();
  });

  it("Should render the second label", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);
    const first_label = screen.getByLabelText(/Second Number/);

    // Assert
    expect(first_label).toBeInTheDocument();
  });

  it("Should render the second input", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);
    const second_number_input = screen.getByPlaceholderText(/Second Number/);

    // Assert
    expect(second_number_input).toBeInTheDocument();
  });

  it("Should render the calculate button", () => {
    // Arrange
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);
    const calculate_button = screen.getByRole("button");

    // Assert
    expect(calculate_button).toBeInTheDocument();
  });

  it("Should render the correct calculation for 1 , 4", async () => {
    // Arrange
    const user = userEvent;
    const my_title = "React App";

    // Act
    render(<App title={my_title} />);

    const first_number_input = screen.getByPlaceholderText(/First Number/);
    const second_number_input = screen.getByPlaceholderText(/Second Number/);
    const calculate_button = screen.getByRole("button");

    await user.type(first_number_input, "1");
    await user.type(second_number_input, "4");
    await user.click(calculate_button);

    // Assert
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("5");
  });
});
