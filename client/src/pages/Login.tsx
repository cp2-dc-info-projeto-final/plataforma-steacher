import React from 'react';
import Login from '../components/login/Login';


export default function Home() {
  return (
    <div className="columns is-mobile">
      <div className="column is-4 is-offset-one-third">
        <Login />
      </div>
    </div>
  );
}
