import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { User } from './types/User';
import { getUsers } from './api';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const loadData = async () => {
    setIsLoading(true);

    try {
      const peopleData = await getUsers();

      setUsers(peopleData);
    } catch (error) {
      setErrorMsg('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={
          (
            <HomePage
              users={users}
              isLoading={isLoading}
              errorMsg={errorMsg}
            />
          )
        }
      />

      <Route
        path="/details/:userId"
        element={<DetailsPage users={users} />}
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
