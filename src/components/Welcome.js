import React from 'react';

const Welcome = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
    </div>
  );
};

export default Welcome;
