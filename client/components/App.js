import React from 'react';
import { Route } from "react-router-dom";

import NavigationBar from './NavigationBar';
import Home from './Home';
import SignUpPage from './sign-up/SignUpPage';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />

                <Route exact path="/" component={Home} />
                <Route path="/sign-up" component={SignUpPage} />
            </div>
        )
    }
}

export default App;