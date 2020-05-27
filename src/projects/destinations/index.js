import React from 'react';
import ReactDOM from 'react-dom';
import Destinations from './destinations';
import * as serviceWorker from '../../serviceWorker';

ReactDOM.render(<Destinations />, document.getElementById('root'));

serviceWorker.unregister();