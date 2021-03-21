import React from 'react';
import {render} from 'react-dom';

import {UserProvider, useUser, useUserState} from './async-load-context';

function Body() {
  const user = useUser();
  const userState = useUserState();

  if (userState === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Hello {user.name}!</p>
    </div>
  );
}

function Application() {
  return (
    <UserProvider>
      <Body />
    </UserProvider>
  );
}

render(<Application />, document.getElementById('async-load-context'));
