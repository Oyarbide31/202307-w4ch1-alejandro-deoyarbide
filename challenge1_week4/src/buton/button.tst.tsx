import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {} from './button';

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(<button> </button>);
    test('the component should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
