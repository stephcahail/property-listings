import { render, screen } from '@testing-library/react';
import PropertyListingPage from './PropertyListingPage';

test('renders property listings header', () => {
  render(<PropertyListingPage />);
  const heading = screen.getByText(
    /Property Listings/i,
  );
  expect(heading).toBeInTheDocument();
});
