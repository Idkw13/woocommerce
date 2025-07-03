import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Header } from "../components/layout/Header";

describe('Header componnet', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText('Termoplast')).toBeDefined();
  });


}); 