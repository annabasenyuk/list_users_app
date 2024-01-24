import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '../components/HomePage/HomePage';
import { DetailsPage } from "../components/DetailsPage/DetailsPage";
import { MemoryRouter } from 'react-router-dom';

describe('HomePage Component', () => {
  it('renders users correctly', () => {
    const users = [
      { 
        id: 1, 
        name: 'Lean', 
        username: 'leanUsername', 
        email: 'lean@example.com', 
        address: { 
          street: '123 Street', 
          suite: 'Apt 4', 
          city: 'City', 
          zipcode: '12345', 
          geo: { 
            lat: '12.34', 
            lng: '56.78' 
          } 
        }, 
        phone: '123-456-7890', 
        website: 'lean.com', 
        company: { 
          name: 'Lean Company', 
          catchPhrase: 'Catchy phrase', 
          bs: 'BS' 
        } 
      },
      { 
        id: 2, 
        name: 'Jane', 
        username: 'janeUsername', 
        email: 'jane@example.com', 
        address: { 
          street: '456 Street', 
          suite: 'Apt 7', 
          city: 'Cityville', 
          zipcode: '54321', 
          geo: { 
            lat: '98.76', 
            lng: '54.32' 
          } 
        }, 
        phone: '987-654-3210', 
        website: 'jane.com', 
        company: { 
          name: 'Jane Company', 
          catchPhrase: 'Another phrase',
          bs: 'More BS' 
        } 
      },
    ];
    const { getByText } = render(
      <MemoryRouter>
        <HomePage users={users} isLoading={false} errorMsg="" />
      </MemoryRouter>
    );

    expect(getByText('Lean')).toBeInTheDocument();
    expect(getByText('Jane')).toBeInTheDocument();
  });

  it('displays loading message when isLoading is true', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage users={[]} isLoading={true} errorMsg="" />
      </MemoryRouter>
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

describe('DetailsPage Component', () => {
  it('renders "User not found" when user is not in the list', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DetailsPage users={[]} />
      </MemoryRouter>
    );

    expect(getByText('User not found')).toBeTruthy();
  })
});
