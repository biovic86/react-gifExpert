import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    });

    test('debe', () => {
        const inputValue = 'Evangelion';
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(screen.getAllByRole('heading', {level: 3}).length).toBeGreaterThan(0);
    });
});