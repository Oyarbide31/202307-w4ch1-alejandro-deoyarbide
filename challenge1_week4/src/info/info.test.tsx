import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './info';

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(<Header />);
    test('the component should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});

/* npm run test */
