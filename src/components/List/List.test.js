import { render, screen } from '@testing-library/react';
import List from "./List";
import DATA from "../../mockData";

describe("<List /> tests", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        render(<List tasks={DATA} />, div);
    });

    it("should contain DATA", () => {
        const div = document.createElement("div");
        render(<List tasks={DATA} />, div);
        expect(screen.queryByText(/Eat/)).toBeInTheDocument();
        expect(screen.queryByText(/sleep/i)).toBeInTheDocument();
        expect(screen.queryByText(/repeat/i)).toBeInTheDocument();
    });
});
