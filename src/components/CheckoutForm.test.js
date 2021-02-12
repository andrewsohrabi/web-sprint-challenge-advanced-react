import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();


});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button", { name: /checkout/i });

    userEvent.type(firstName,"Chuck")
    userEvent.type(lastName,"Norris")
    userEvent.type(address,"666 Do Not Come Here Drive")
    userEvent.type(city,"NYC")
    userEvent.type(state,"New York")
    userEvent.type(zip,"66666")

    userEvent.click(button);

    const sucessMessageSnippet = screen.getByText(/You have ordered some plants!/i)

    expect(sucessMessageSnippet).toBeInTheDocument();

    const formDetailsName = screen.getByText(/chuck norris/i)

    expect(formDetailsName).toBeInTheDocument();

});
