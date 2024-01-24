import { fireEvent, render, screen } from '@testing-library/react';
import PropertyListing from './PropertyListing';

const testPropertyData = {
  address: {
    streetName: '123 Elm Street',
    city: 'Austin',
    state: 'Texas'
  },
  photos: [
    'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg'
  ],
  listPrice: '1000000',
  listDate: '2011-05-23T18:50:30.184391Z',
  property: {
    bedrooms: 2,
    bathsFull: 2,
    bathsHalf: 3,
    area: 1048
  }
};

test('renders property details', () => {
  render(<PropertyListing property={testPropertyData} key={'key'} />);
  expect(screen.getByText(/2 BR | 3.5 Bath | 1048 Sq Ft/i)).toBeInTheDocument();
  expect(screen.getByText("$1,000,000")).toBeInTheDocument();
  expect(screen.getByText(/123 Elm Street, Austin, Texas/i)).toBeInTheDocument();
  expect(screen.getByText("Listed: 05/23/11")).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(2);
  expect(images[0]).toHaveAttribute("src", "heart-stroke.svg");
  expect(images[1]).toHaveAttribute(
    "src",
    "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
  );
});

test('renders toggleable favorite button', () => {
  render(<PropertyListing property={testPropertyData} key={'key'} />);
  const heartButton = screen.getByRole('button');
  expect(heartButton).toBeInTheDocument();
  expect(screen.getByAltText('not favorited')).toBeInTheDocument();
  expect(screen.queryByAltText('favorited')).not.toBeInTheDocument();
  fireEvent.click(heartButton);
  expect(screen.getByAltText('favorited')).toBeInTheDocument();
  expect(screen.queryByAltText('not favorited')).not.toBeInTheDocument();
});
