import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Filter />, document.getElementById('root'));

serviceWorker.unregister();
