import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './AppHeader';

describe('App Header Tests', () => {
  it('renders header', () => {
    render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>
    );
    expect(screen.getByText(/photos/i)).toBeInTheDocument();
  });
});