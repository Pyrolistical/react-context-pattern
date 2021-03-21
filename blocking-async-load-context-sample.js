import React from 'react';
import {render} from 'react-dom';

import {UserProvider, useUser} from './blocking-async-load-context';

function Body() {
  const user = useUser();

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

render(<Application />, document.getElementById('blocking-async-load-context'));
