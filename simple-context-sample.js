import React from 'react';
import {render} from 'react-dom';

import {ColorProvider, useColor, useSetColor} from './simple-context';

function Nav() {
  const color = useColor();
  const setColor = useSetColor();

  return (
    <div>
      <h2>Nav</h2>
      <select value={color} onChange={({target: {value}}) => setColor(value)}>
        <option value="red"> red </option>
        <option value="green"> green </option>
        <option value="blue"> blue </option>
      </select>
    </div>
  );
}

function Body() {
  const color = useColor();
  return (
    <div>
      <h2>Body</h2>
      <p>You've selected {color}</p>
    </div>
  );
}

function Application() {
  return (
    <ColorProvider defaultColor="red">
      <Nav />
      <Body />
    </ColorProvider>
  );
}

render(<Application />, document.getElementById('simple-context'));
