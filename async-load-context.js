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

  return (
    <UserContext.Provider value={{user, state}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const {user} = useContext(UserContext);
  return user;
}

export function useUserState() {
  const {state} = useContext(UserContext);
  return state;
}
