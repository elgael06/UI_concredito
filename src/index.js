import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './Routes';
import { BrowserRouter as Rpoter } from 'react-router-dom';

ReactDOM.render(<Rpoter>
    <AppRouters />
    </Rpoter>, document.getElementById('root'));
