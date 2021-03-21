import React from 'react';
import {render} from 'react-dom';

import {Provider, useValue, useSetValue} from './simple-context';

function Nav() {
  const value = useValue();
  const setValue = useSetValue();

  return (
    <div>
      <h2>Nav</h2>
      <select value={value} onChange={({target: {value}}) => setValue(value)}>
        <option value="red"> red </option>
        <option value="green"> green </option>
        <option value="blue"> blue </option>
      </select>
    </div>
  );
}

function Body() {
  const value = useValue();
  return (
    <div>
      <h2>Body</h2>
      <p>You've selected {value}</p>
    </div>
  );
}

function Application() {
  return (
    <Provider defaultValue="red">
      <Nav />
      <Body />
    </Provider>
  );
}

render(<Application />, document.getElementById('simple-context'));
