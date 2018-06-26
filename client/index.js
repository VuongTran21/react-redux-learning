import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import RootComponent from './components/RootComponent';

render(
    <BrowserRouter>
        <RootComponent />
    </BrowserRouter>,
    document.getElementById('app')
);