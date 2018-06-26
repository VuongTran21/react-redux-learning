import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';

import timeZones from '../../data/timeZones';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            time_zone: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        axios.post('/api/users', this.state);
    }

    render() {
        const options = _.map(timeZones, (val, key) => <option key={val} value={val}>{key}</option>);

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="user_name">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="user_name"
                        placeholder="User Name"
                        name="user_name"
                        onChange={this.onChange}
                        value={this.state.user_name}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        placeholder="Password Confirmation"
                        name="password_confirmation"
                        onChange={this.onChange}
                        value={this.state.password_confirmation}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time_zone">Time Zone</label>
                    <select
                        className="form-control"
                        name="time_zone"
                        onChange={this.onChange}
                        value={this.state.time_zone}
                    >
                        <option value="">Choose Your Time Zone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;