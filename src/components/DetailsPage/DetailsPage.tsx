import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { User } from '../../types/User';
import { UserDetails } from '../UserDetails/UserDetails';
import './DetailsPage.scss';
import webIcon from '../../styles/icons/web-browser-icon.svg';

interface Props {
  users: User[];
}

export const DetailsPage: React.FC<Props> = ({ users }) => {
  const { userId } = useParams();
  const user = users.find(u => u.id.toString() === userId);

  if (!user) {
    return <p data-testid="user-not-found">User not found</p>;
  }

  return (
    <section className="block" data-testid="details-page">
      <div className="header">
        <h1 className="header__title">DetailsPage</h1>

        <Link to="/">
          <button
            type="button"
            className="header__button"
          >
            Back to Home
          </button>
        </Link>
      </div>

      <div className="container">
        <div className="cover">
          <div className="cover__title">
            <div className="cover__title-name">{user.name}</div>
            <div className="cover__title-username">{`@${user.username}`}</div>
          </div>

          <div>
            <div className="cover__web">
              <img
                src={webIcon}
                alt="Web Icon"
                className="cover__web-icon"
              />
              <a
                href={`http://${user.website}`}
                className="cover__web-title"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </div>
          </div>
        </div>

        <UserDetails user={user} />
      </div>
    </section>
  );
};
