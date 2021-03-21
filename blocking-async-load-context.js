import React, {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

export function UserProvider({children}) {
  const [state, setState] = useState('loading');
  const [user, setUser] = useState();

  async function loadUser() {
    const user = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Bob',
        });
      }, 2000);
    });
    setUser(user);
    setState('ready');
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (state === 'loading') {
    return <p>Loading...</p>;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
