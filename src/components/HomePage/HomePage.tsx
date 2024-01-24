import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';
import './HomePage.scss';

interface Props {
  users: User[];
  isLoading: boolean;
  errorMsg: string;
}

export const HomePage: React.FC<Props> = ({ users, isLoading, errorMsg }) => {
  return (
    <>
      <h1 className="title">People List</h1>
      {isLoading ? (
        <p className="content__loading">Loading...</p>
      ) : (
        <section className="section">
          {users.map((el => (
            <div
              key={el.id}
              className="section__block"
            >
              <div className="section__title">
                {el.name}
              </div>

              <Link to={`/details/${el.id}`} state={{ user: el }}>
                <button
                  type="button"
                  className="button"
                >
                  Detail
                </button>
              </Link>
            </div>
          )))}

          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        </section>
      )}
    </>
  );
};
