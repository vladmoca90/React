import React from 'react';
import ReactDOM from 'react-dom';
import airlineDest from './airlines-destinations';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<airlineDest />, document.getElementById('root'));

serviceWorker.unregister();
