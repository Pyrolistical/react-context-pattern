import React, {createContext, useContext, useState} from 'react';

const ColorContext = createContext({
  value: undefined,
  setValue: () => {},
});

export function ColorProvider({defaultColor, children}) {
  const [color, setColor] = useState(defaultColor);

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const {color} = useContext(ColorContext);
  return color;
}

export function useSetColor() {
  const {setColor} = useContext(ColorContext);
  return setColor;
}
