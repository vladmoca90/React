import React from 'react';
import ReactDOM from 'react-dom';
import Showroom from './cars';
import * as serviceWorker from '../../serviceWorker';

ReactDOM.render(<Showroom />, document.getElementById('root'));

serviceWorker.unregister();
