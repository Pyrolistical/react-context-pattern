import React, {createContext, useContext, useState} from 'react';

const Context = createContext({
  value: undefined,
  setValue: () => {},
});

export function Provider({defaultValue, children}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useValue() {
  const {value} = useContext(Context);
  return value;
}

export function useSetValue() {
  const {setValue} = useContext(Context);
  return setValue;
}
