import React from 'react';

function RenderGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome, User!</p>;
  } else {
    return <p>Please log in</p>;
  }
}

function MyComponent({ isLoggedIn }) {
  return (
    <div>
      {RenderGreeting({ isLoggedIn })}
    </div>
  );
}

export default MyComponent;
