import React from 'react';
import ReactDOM from 'react-dom';
import Actors from './filter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Actors />, document.getElementById('root'));

serviceWorker.unregister();
