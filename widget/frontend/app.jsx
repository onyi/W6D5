import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './widget.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Widget/>, document.getElementById('main'));
});

