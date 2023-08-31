import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
    render(<Home />);
    const linkElement = screen.getByText(/welcome to louisfilip.com/i);
    expect(linkElement).toBeInTheDocument();
});