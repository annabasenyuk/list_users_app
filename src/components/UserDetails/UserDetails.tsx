import React from 'react';
import { User } from '../../types/User';
import './UserDetails.scss';

interface Props {
  user: User;
}

export const UserDetails: React.FC<Props> = ({ user }) => {
  const userProperties = [
    { title: 'Company', data: user.company.name },
    { title: 'Description', data: user.company.catchPhrase },
    { title: 'Purpose', data: user.company.bs },
    { title: 'Phone', data: user.phone },
    { title: 'Address', data: `${user.address.street}, ${user.address.suite}` },
    { title: 'City', data: user.address.city },
    { title: 'Zip code', data: user.address.zipcode },
  ];

  return (
    <div>
      {userProperties.map((property, index) => (
        <div key={index} className="description">
          <div className="description__title">{property.title}</div>
          <div className="description__data">{property.data}</div>
        </div>
      ))}
    </div>
  );
};
