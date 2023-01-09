/*
1. Añadir proptypes
    a. title obligatorio
    b. url obligatorio
2. evaluar el snapshot
*/

import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

const title = 'Saitama';
const url = 'https://one-punch.com/saitama.jpg';

describe('Pruebas sobre GifItem', () => {
  test('debe de hacer match el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    // screen.debug();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
