import React from 'react';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-md-offset-3">
                <SignUpForm />
            </div>
        )
    }
}

export default SignUpPage;