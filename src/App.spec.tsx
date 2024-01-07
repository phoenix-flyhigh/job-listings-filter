import {render, screen} from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

describe("App tests", () => {
    it("Should contain hello world", () => {
        render(<App />)

        expect(screen.getByText("Home page")).toBeInTheDocument();
    })
})